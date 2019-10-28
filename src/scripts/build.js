const path = require('path')

const smith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')
const minifyHtml = require('metalsmith-html-minifier')
const markdown = require('./plugins/markdown')
const pagination = require('./plugins/pagination')

const source = path.resolve(__dirname, '..')
const target = path.resolve(__dirname, '..', '..', 'build')

const production = process.env.NODE_ENV === 'production'

smith(source)
  // Base data available inside templates
  .metadata({
    now: new Date(),
    author: 'Giacomo Gregoletto',
    title: '{ spaghetti code }',
    description: 'An amalgamate of words written by an Italian guy',
    image: '/img/head.jpg',
    page_size: 8,
    root: production ? '/personal-blog' : ''
  })
  // Files to precess
  .source(path.join(source, 'site'))
  // Destination dir
  .destination(target)
  // Delete the destination dir before any write
  .clean(true)
  // Inject groups inside metadata
  .use(collections({
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(pagination())
  .use(markdown())
  .use(permalinks({
    relative: false,
    pattern: ':date/:title'
  }))
  .use(layouts({
    pattern: '**/*.html',
    directory: path.join(source, 'templates'),
    default: 'default.njk',
    engineOptions: {
      filters: require('./libs/filters')
    }
  }))
  .use(minifyHtml())
  .build(function (err) {
    if (err) {
      console.error(err)
    }
    process.exit(err ? 1 : 0)
  })
