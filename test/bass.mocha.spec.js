
import assert from 'assert'
import colorsCss from 'colors.css'
import bass from '../lib/bass'

const initial = {
  x: [0, 8, 16, 32, 64],
  h: [48, 32, 24, 20, 16, 14, 12],
  font: '-apple-system, system, sans-serif',
  breakpoints: [],
  colors: colorsCss,
  darken: [
    'rgba(0, 0, 0, 0.0625)',
    'rgba(0, 0, 0, 0.125)',
    'rgba(0, 0, 0, 0.1875)',
    'rgba(0, 0, 0, 0.25)'
  ],
  lighten: [
    'rgba(255, 255, 255, 0.0625)',
    'rgba(255, 255, 255, 0.125)',
    'rgba(255, 255, 255, 0.1875)',
    'rgba(255, 255, 255, 0.25)'
  ],
  radius: 3,
  col: [
    (1 / 12) + '%',
    (2 / 12) + '%',
    (3 / 12) + '%',
    (4 / 12) + '%',
    (5 / 12) + '%',
    (6 / 12) + '%',
    (7 / 12) + '%',
    (8 / 12) + '%',
    (9 / 12) + '%',
    (10 / 12) + '%',
    (11 / 12) + '%',
    (12 / 12) + '%',
  ]
}

let custom

describe('bass', () => {

  it('bass should be an object', () => {
    assert.equal(typeof bass, 'object')
  })

  it('x should be an array', () => {
    assert(Array.isArray(bass.x))
  })

  it('should change the custom value', () => {
    custom = [0, 6, 12, 24]
    bass.set({ x: custom })
    assert.deepEqual(bass.x, custom)
  })

  it('should keep the custom value', () => {
    assert.deepEqual(bass.x, custom)
  })

  it('should reset to defaults', () => {
    bass.reset()
    assert.deepEqual(bass.x, initial.x)
  })

})

