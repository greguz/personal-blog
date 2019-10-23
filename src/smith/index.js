const moment = require('moment')
const path = require('path')

const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const permalinks = require('metalsmith-permalinks')

const PAGE_SIZE = 8

const source = path.resolve(__dirname, '..')
const target = path.resolve(__dirname, '..', '..', 'build')

Metalsmith(source)
  .metadata({
    now: new Date(),
    author: 'Giacomo Gregoletto',
    title: '{ spaghetti code }',
    description: 'An amalgamate of words written by an Italian guy',
    image: '/img/brain.jpg',
    url: (url) => {
      // TODO: configure this
      // return '/personal-blog' + url;
      return url
    }
  })
  .source(path.join(source, 'site'))
  .destination(target)
  .clean(true)
  // TODO: generate tags.md
  .use(collections({
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(permalinks({
    // TODO: fix this
    // duplicatesFail: true,
    relative: false,
    pattern: ':date/:title'
  }))
  .use(layouts({
    pattern: '**/*.html',
    directory: path.join(source, 'templates'),
    default: 'default.njk',
    engineOptions: {
      filters: {
        add: (...args) => args.reduce((acc, arg) => acc + arg, 0),
        parseDate: (date, format) => moment(date, format).toDate(),
        formatDate: (date, format) => moment(date).format(format),
        paginate: (items, page) => {
          const index = (page - 1) * PAGE_SIZE
          return items.slice(index, index + PAGE_SIZE)
        },
        hasMore: (items, page) => {
          return items.length > (page * PAGE_SIZE)
        }
      }
    }
  }))
  .build(function (err) {
    if (err) {
      console.error(err)
    }
    process.exit(err ? 1 : 0)
  })
