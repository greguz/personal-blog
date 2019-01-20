---
title: Back pressured thoughts
date: 2019-01-20 17:05:29
categories:
  - Projects
  - rxlax
tags:
  - JavaScript
  - Node.js
  - ReactiveX
---

Node.js is perfect for scripting. With its well-stocked library, you can just drop a small amount of code to solve complicated problems. Add some [ReactiveX](https://rxjs-dev.firebaseapp.com/)-flavored code and you will be able to conquer the world.

<!-- more -->

Anyone who has used Node.js for some time, probably knows very well the [backpressure](https://nodejs.org/en/docs/guides/backpressuring-in-streams/) problem with streams. It's when you define a readable stream (the source) and a writable stream (the target) but the writable stream is slower to process the data then the readable stream to output new data.

Node.js trasparently solve this problem with a complex start&stop mechanism implemented inside the _stream_ subsystem. Rx.js, on the other side, does not solve this problem directly, instead let developers to choose the best solution for their projects.

[This](https://codeburst.io/a-look-at-back-pressure-and-its-handling-in-rxjs-5bc8f04a2e8f) article describe some common ways to fight backpressure with Rx.js. But I found that sometimes all of the "standard" ways are not suitable to achive a solution, especially when you have long-running streams. So, after a lot of tests with absurdly-big observables, I wrote a dead simple **operator** that implements an optional **async queue/buffer** to handle slow-processing targets: **[rxlax](https://github.com/greguz/rxlax)**.

This lib literally makes Rx.js to relax, preventing high RAM and CPU usage, so the name is the union of **rx** and **relax** words. I'm not sure if the name choice is clever, or just idiotic.
