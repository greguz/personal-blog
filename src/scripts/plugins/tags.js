module.exports = function plugin (files, smith, done) {
  const tags = []
  for (const filename in files) {
    if (/^posts\//.test(filename)) {
      if (files[filename].tags) {
        tags.push(...files[filename].tags)
      }
    }
  }
  // TODO: lowercase
  // TODO: unique
  // TODO: inject computed "tags.md" file
  done(null, files, smith)
}
