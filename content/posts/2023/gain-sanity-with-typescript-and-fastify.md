+++
date = "2023-01-02"
title = "Gain sanity with TypeScript and Fastify"
tags = ["javascript", "typescript", "fastify"]
draft = true
+++

_Fastify_ and _TypeScript_. I am sure more than one person is using this stack configuration for both pet-projects and some production code. Full disclosure: I have to place myself into this category too.

code

```typescript
import type * as fastify from 'fastify'
import type * as http from 'http'

export type RawServer = http.Server

export type RawRequest = http.IncomingMessage

export type RawReply = http.ServerResponse

export interface FastifyContext {
  // TODO: place here something useful
}

export type FastifySchema = fastify.FastifySchema

export type FastifyInstance = fastify.FastifyInstance<
  RawServer,
  RawRequest,
  RawReply
>

export type FastifyReply = fastify.FastifyReply<
  RawServer,
  RawRequest,
  RawReply,
  {},
  FastifyContext,
  FastifySchema,
  fastify.FastifyTypeProviderDefault,
  {}
>

export type FastifyRequest<G extends RouteGeneric = RouteGenericDefault> =
  fastify.FastifyRequest<
    G,
    RawServer,
    RawRequest,
    FastifySchema,
    fastify.FastifyTypeProviderDefault,
    FastifyContext,
    FastifyLogger,
    {
      body: G['Body'] // this
      headers: G['Headers'] // is
      params: G['Params'] // madness
      query: G['Querystring'] // ffs
    }
  >

export type RouteOptions<G extends RouteGeneric = RouteGenericDefault> =
  fastify.RouteOptions<
    RawServer,
    RawRequest,
    RawReply,
    G,
    FastifyContext,
    FastifySchema,
    fastify.FastifyTypeProviderDefault,
    FastifyLogger
  >

export interface RouteGeneric {
  Body?: any
  Querystring?: Record<string, any>
  Params?: Record<string, any>
  Headers?: Record<string, any>
}

// this interface is just an example for some "sane" defaults
export interface RouteGenericDefault {
  Body: Record<string, any>
  Querystring: Record<string, any>
  Params: Record<string, any>
  Headers: Record<string, any>
}
```

tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@my-project/fastify": ["./src/lib/fastify.js"]
    }
  }
}
```

route example

```typescript
import type { RouteOptions } from '@my-project/fastify'
import S from 'fluent-json-schema-es'

interface RouteGeneric {
  Body: {
    name: string
  }
}

const route: RouteOptions<RouteGeneric> = {
  method: 'POST',
  url: '/api/v1/say-hello',
  schema: {
    body: S.object()
      .additionalProperties(false)
      .prop('name', S.string())
      .required(),
    response: {
      200: S.object()
        .additionalProperties(false)
        .prop('message', S.string())
        .require()
    }
  },
  async handler(request) {
    return { message: `Hello ${request.body.name}` }
  }
}
```
