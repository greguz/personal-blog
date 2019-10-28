const moment = require('moment')

function parseDate (date, format) {
  return moment(date, format).toDate()
}

function formatDate (date, format) {
  return moment(date).format(format)
}

function paginate (items, pageSize, pageNumber) {
  const index = (pageNumber - 1) * pageSize
  return items.slice(index, index + pageSize)
}

function hasNextPage (items, pageSize, pageNumber) {
  return items.length > (pageNumber * pageSize)
}

module.exports = {
  parseDate,
  formatDate,
  paginate,
  hasNextPage
}
