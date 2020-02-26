const util = require('util')

function clamp(val, min, max) {
  if (val > max) { val = max }
  if (val < min) { val = min }
  return val
}

function align(text, size, align, fill) {
  if (!fill) { fill = ' '}
  if (!align || align === 'left') {
    return text + fill.repeat(size-text.length)
  }
  if (align === 'right') {
    return fill.repeat(clamp(size-text.length ,0, size)) + text
  }
  if (align === 'center') {
    var o = clamp(Math.round((size-text.length)/2))
    return fill.repeat(o) + text + fill.repeat(size-text.length-o)
  }
}

function pad(text, padding, side, num) {
  if (side === 'left') { text = padding.repeat(num) + text }
  if (side === 'right') { text += padding.repeat(num) }
  return text
}

function row(items, sizes, options) {
  // defaults
  var left = ''
  var right = ''
  var wall = ' '
  var alignment = []
  // read options
  if (options) {
    if (options.wall) { wall = options.wall }
    if (options.left) { left = options.left }
    if (options.right) { right = options.right }
    if (options.alignment) { alignment = options.alignment }
  }
  var row = left
  for (var i in sizes) {
    var nalign = 'left'
    var item = '--'
    if (alignment[i]) { nalign = alignment[i] }
    if (items[i]) { item = items[i] }
    row += align(item, sizes[i], nalign)
    if (i == sizes.length-1) {
      row += right
    } else {
      row += wall
    }
  }
  return row
}

function table(items, rowback, fmt) {
  // defaults
  var left = ''
  var wall = ' '
  var right = ''
  // options
  if (fmt){
    if (fmt.walls){
      left=fmt.walls[0]
      wall=fmt.walls[1]
      right=fmt.walls[2]
    }
  }
  // find the longest item in each row
  var sizes = []
  for (var i in items) {
    var nrow = items[i]
    while (nrow.length > sizes.length) { sizes.push(0) }
    for (var i in nrow) {
      if (sizes[i] < nrow[i].length) { sizes[i] = nrow[i].length }
    }
  }

  function drawrow(nrow) {
    return row(nrow, sizes, {
      left: left, wall: wall, right: right,
      alignment: fmt.alignment,
    })
  }

  var width = sizes.reduce((a, b) => a + b, 0) + left.length + wall.length*(sizes.length-1) + right.length

  if (fmt.tableheader){  rowback(fmt.tableheader(width)) }

  // call row for each row
  for (var i in items) {
    rowback(drawrow(items[i]))
    if (i == 0 && fmt.header) {
      var header = []
      for (var n in sizes) { header.push(fmt.header.repeat(sizes[n])) }
      rowback(drawrow(header))
    }
  }
  if (fmt.tablefooter){  rowback(fmt.tablefooter(width)) }
}

exports.tableheader = function(title) {
  return function(width) {
    return '┏' + align(`[${title}]`, width-2, 'center', '━') + '┓'
  }
}

exports.tablefooter = function() {
  return function(width) {
    return '┗' + '━'.repeat(width-2) + '┛'
  }
}

// exports.table = function() {
//
// }

exports.align = align
exports.row = row
exports.table = table
