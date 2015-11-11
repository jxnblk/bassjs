
import Color from 'color'
import colorsCss from 'colors.css'
import getCols from './get-cols'
import range from './range'

const defaults = {
  x: [
    0, 8, 16, 32, 64
  ],
  h: [
    48, 32, 24, 20, 16, 14, 12
  ],
  font: '-apple-system, system, sans-serif',
  colors: colorsCss,
  darken: range(16).map((n) => Color('#000').alpha(n / 16).rgbString()),
  lighten: range(16).map((n) => Color('#fff').alpha(n / 16).rgbString()),
  radius: 3,
  col: getCols(12)
}

export default defaults
