// Hexadecimal
// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRGB (color) {
  var r, g, b
  // var color ='#00FF00'
  r = parseInt(color.substring(1, 3), 16)
  g = parseInt(color.substring(3, 5), 16)
  b = parseInt(color.substring(5, 7), 16)
  return 'rgb (' + r + ',' + g + ',' + b + ')'
}

getRGB('#00FF00')

//
function getRGB2 (color) {
  var r, g, b
  // var color ='#00FF00'
  r = parseInt(color.slice(1, 3), 16)
  g = parseInt(color.slice(3, 5), 16)
  b = parseInt(color.slice(5, 7), 16)
  return 'rgb (' + r + ',' + g + ',' + b + ')'
}

getRGB2('#00FF00')

// Hexadecimal enhanced
// Improves the previous function so besides the conversion also identifies some basic colors:
// Black: #000000 //White: #FFFFFF//Red: #FF0000
// Green: #00FF00 //Blue: #0000FF

function getRGB3 (color) {
  switch (color) {
    case '#000000':
      return 'rgb(0,255,0)  black'
      break
    case '#FFFFFF':
      return 'rgb(255,255,255)  white'
      break
    case '#FF0000':
      return 'rgb(255,0,0)  red'
      break
    case '#00FF00':
      return 'rgb(0,255,0)  green'
      break
    case '#0000FF':
      return 'rgb(0,0,255)  blue'
      break
  }
}

getRGB3('#00FF00')
