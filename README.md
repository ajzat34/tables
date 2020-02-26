# tableprint
NodeJS table formating

# Install
`npm install tableprint`
# Usage:
```node
// tables.log prints the output to the console
// use tables.print to return a string
// and tables.table(items, callback(row), fmt) to get a callback for each row
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
  name: 'Sample Table', // remove to disable header and footer
})
```
# Sample Output (It looks better in the terminal)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[Sample Table]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Username ┃ Status  ┃ Account # ┃ Queries ┃ cart               ┃ order status     ┃
┃ -------- ┃ ------- ┃ --------- ┃ ------- ┃ ------------------ ┃ ---------------- ┃
┃ foo      ┃ online  ┃     1     ┃      54 ┃ eggs, milk, cheese ┃ shipping         ┃
┃ bar      ┃ offline ┃     3     ┃     234 ┃ carrots            ┃ none             ┃
┃ baz      ┃ loading ┃     2     ┃   12824 ┃ --                 ┃ --               ┃
┃ eggs     ┃ offline ┃     3     ┃     123 ┃ frying pan         ┃ out for delivery ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```
```
┃ Username ┃ Status  ┃ Account # ┃ Queries ┃ cart               ┃ order status     ┃
┃ -------- ┃ ------- ┃ --------- ┃ ------- ┃ ------------------ ┃ ---------------- ┃
┃ foo      ┃ online  ┃     1     ┃      54 ┃ eggs, milk, cheese ┃ shipping         ┃
┃ bar      ┃ offline ┃     3     ┃     234 ┃ carrots            ┃ none             ┃
┃ baz      ┃ loading ┃     2     ┃   12824 ┃ --                 ┃ --               ┃
┃ eggs     ┃ offline ┃     3     ┃     123 ┃ frying pan         ┃ out for delivery ┃
```
