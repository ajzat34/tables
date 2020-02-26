const tables = require('./index.js')

console.log('named table: ')

tables.log([
  ['Username', 'Status', 'Account #', 'Queries', 'cart', 'order status'],
  ['foo', 'online', '1', '54', 'eggs, milk, cheese', 'shipping'],
  ['bar', 'offline', '3', '234', 'carrots', 'none'],
  ['baz', 'loading', '2', '12824'],
  ['eggs', 'offline', '3', '123', 'frying pan', 'out for delivery'],
], {
  walls:['┃ ', ' ┃ ', ' ┃'],
  header: '-',
  alignment: ['left', 'left', 'center', 'right'],
  name: 'Sample Table',
})

console.log('table without name: ')

tables.log([
  ['Username', 'Status', 'Account #', 'Queries', 'cart', 'order status'],
  ['foo', 'online', '1', '54', 'eggs, milk, cheese', 'shipping'],
  ['bar', 'offline', '3', '234', 'carrots', 'none'],
  ['baz', 'loading', '2', '12824'],
  ['eggs', 'offline', '3', '123', 'frying pan', 'out for delivery'],
], {
  walls:['┃ ', ' ┃ ', ' ┃'],
  header: '-',
  alignment: ['left', 'left', 'center', 'right'],
})
