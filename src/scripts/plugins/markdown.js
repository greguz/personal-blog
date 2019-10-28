const marked = require('marked')
const markdown = require('metalsmith-markdown')

function build (smith) {
  const renderer = new marked.Renderer()

  const root = smith.metadata().root || ''

  renderer.image = function (href, title, text) {
    return `<img src="${root + href}" alt="${title}" title="${title}" />`
  }

  return markdown({
    renderer
  })
}

module.exports = function () {
  let p
  return function plugin (files, smith, done) {
    p = p || build(smith)
    p(files, smith, done)
  }
}
