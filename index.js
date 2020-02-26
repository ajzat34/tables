const fmt = require('./fmt.js')

function table(items, rowback, options) {
  if (options.name) {
    options.tableheader = fmt.tableheader(options.name)
    options.tablefooter = fmt.tablefooter()
  }
  fmt.table(items, rowback, options)
}

function tableprint(items, options){
  var r = []
  table(items, function(row){r.push(row)}, options)
  return r.join('\n')
}

function tablelog(items, options){
  console.log(tableprint(items,options))
}

exports.table = table
exports.print = tableprint
exports.log = tablelog
