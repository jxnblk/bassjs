
var ms = require('simple-modular-scale')
var clrs = require('colors.css')
var Color = require('color')

var scale = ms({
  base: 8,
  ratios: [9/8, 4/3, 4/3],
  length: 32
})

module.exports = {
  helvetica: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  avenir: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif',
  georgia: 'Georgia, serif',
  h1: scale[6],
  h2: scale[5],
  h3: scale[4],
  h4: scale[3],
  h5: scale[2],
  h6: scale[1],
  scale: scale,
  colors: clrs,
  lighten: [
    color('#fff').alpha(1/16).rgbstring(),
    color('#fff').alpha(2/16).rgbstring(),
    color('#fff').alpha(3/16).rgbstring(),
    color('#fff').alpha(4/16).rgbstring(),
  ],
  darken: [
    color('#000').alpha(1/16).rgbstring(),
    color('#000').alpha(2/16).rgbstring(),
    color('#000').alpha(3/16).rgbstring(),
    color('#000').alpha(4/16).rgbstring(),
  ],
}

