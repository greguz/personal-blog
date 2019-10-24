function createPage (pageNumber) {
  return {
    layout: 'posts.njk',
    page_number: pageNumber,
    contents: Buffer.alloc(0),
    mode: '0644',
    path: `page/${pageNumber}.md`,
    collection: []
  }
}

module.exports = function pagination () {
  return function plugin (files, smith, done) {
    const pageSize = smith.metadata().page_size || 8

    let count = 0
    for (const filename in files) {
      if (/^posts\//.test(filename)) {
        count++
      }
    }

    const pages = Math.ceil(count / pageSize)
    for (let i = 2; i <= pages; i++) {
      const page = createPage(i)
      files[page.path] = page
    }

    done(null, files, smith)
  }
}
