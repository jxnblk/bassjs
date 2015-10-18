
import Color from 'color'
import colorsCss from 'colors.css'

function range(n) {
  return Array.from({ length: n }, (a, b) => b + 1)
}

const defaults = {
  x: [
    0, 8, 16, 32, 64
  ],
  h: [
    48, 32, 24, 20, 16, 14, 12
  ],
  font: '-apple-system, system, sans-serif',
  breakpoints: [
  ],
  colors: colorsCss,
  darken: range(4).map((n) => Color('#000').alpha(n / 16).rgbString()),
  lighten: range(4).map((n) => Color('#fff').alpha(n / 16).rgbString()),
  radius: 3,
  col: range(12).map((n) => (n / 12) + '%')
}

export default defaults
