
import modular from 'simple-modular-scale'
import spectralize from 'spectralize'
import Color from 'color'

export const X = 16

export const scale = modular({
  base: X / 2,
  ratios: [9/8, 4/3, 4/3],
  length: 24
})

export const sans = `"Helvetica Neue", Helvetica, Arial, sans-serif`

export const h1 = scale[6]
export const h2 = scale[5]
export const h3 = scale[4]
export const h4 = scale[3]
export const h5 = scale[2]
export const h6 = scale[1]

export const lighten =
  Array.apply(null, { length: 16 })
  .map((n, i) => {
    return Color('#fff').alpha(i/16).rgbString()
  })

export const darken =
  Array.apply(null, { length: 16 })
  .map((n, i) => {
    return Color('#000').alpha(i/16).rgbString()
  })

export const { hues } = spectralize({
  h: 0,
  s: 85,
  hues: 5,
  steps: 8,
  swing: 24,
  padL: 10
})

export const red = hues[0]
export const yellow = hues[1]
export const green = hues[2]
export const blue = hues[3]
export const purple = hues[4]

