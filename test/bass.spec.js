
import assert from 'assert'
import Color from 'color'
import colorsCss from 'colors.css'
import bass from '../lib'

const initial = {
  x: [0, 8, 16, 32, 64],
  h: [48, 32, 24, 20, 16, 14, 12],
  font: '-apple-system, system, sans-serif',
  colors: colorsCss,
  darken: [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.0625)',
    'rgba(0, 0, 0, 0.125)',
    'rgba(0, 0, 0, 0.1875)',
    'rgba(0, 0, 0, 0.25)'
  ],
  lighten: [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.0625)',
    'rgba(255, 255, 255, 0.125)',
    'rgba(255, 255, 255, 0.1875)',
    'rgba(255, 255, 255, 0.25)'
  ],
  radius: 3,
  col: [
    (0 / 12) + '%',
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

  describe('types', () => {
    it('bass should be an object', () => {
      assert.equal(typeof bass, 'object')
    })

    it('x should be an array', () => {
      assert(Array.isArray(bass.x))
    })

    it('h should be an array', () => {
      assert(Array.isArray(bass.h))
    })

    it('font should be a string', () => {
      assert.equal(typeof bass.font, 'string')
    })

    it('colors should be an object', () => {
      assert.equal(typeof bass.colors, 'object')
    })

    it('darken should be an array', () => {
      assert(Array.isArray(bass.darken))
    })

    it('lighten should be an array', () => {
      assert(Array.isArray(bass.lighten))
    })

    it('radius should be a number', () => {
      assert.equal(typeof bass.radius, 'number')
    })

    it('col should be an array', () => {
      assert(Array.isArray(bass.col))
    })
  })

  describe('intial values', () => {
    it('x should match default values', () => {
      assert.deepEqual(bass.x, initial.x)
    })

    it('h should match default values', () => {
      assert.deepEqual(bass.h, initial.h)
    })

    it('font should match default values', () => {
      assert.equal(bass.font, initial.font)
    })

    it('colors should match default values', () => {
      assert.deepEqual(bass.colors, initial.colors)
    })

    it('darken should match default values', () => {
      assert.deepEqual(bass.darken, initial.darken)
    })

    it('lighten should match default values', () => {
      assert.deepEqual(bass.lighten, initial.lighten)
    })

    it('col should match default values', () => {
      assert.deepEqual(bass.col, initial.col)
    })
  })

  describe('methods', () => {
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

    it('setScale should change the scale', () => {
      bass.setScale(custom)
      assert.deepEqual(bass.x, custom)
    })

    it('setTypeScale should change the scale', () => {
      custom = [128, 72, 64]
      bass.setTypeScale(custom)
      assert.deepEqual(bass.h, custom)
    })

    it('setFont should change the font', () => {
      custom = 'Georgia, serif'
      bass.setFont(custom)
      assert.equal(bass.font, custom)
    })

    it('setColors should change the colors', () => {
      custom = { blue: '#0cf' }
      bass.setColors(custom)
      assert.deepEqual(bass.colors, custom)
    })

    it('setDarken should change the colors', () => {
      custom = [ 'rgba(0,0,0,.25)' ]
      bass.setDarken(custom)
      assert.deepEqual(bass.darken, custom)
    })

    it('setLighten should change the colors', () => {
      custom = [ 'rgba(255,255,255,.25)' ]
      bass.setLighten(custom)
      assert.deepEqual(bass.lighten, custom)
    })

    it('setRadius should change the radius', () => {
      custom = 6
      bass.setRadius(custom)
      assert.equal(bass.radius, custom)
    })

    it('setCol should change the widths', () => {
      custom = [ '0', '25%' ]
      bass.setCol(custom)
      assert.deepEqual(bass.col, custom)
    })

    it('setColumns should recalculate widths', () => {
      bass.setColumns(8)
      assert.equal(bass.col[1], (1 / 8) + '%')
    })

    it('should keep all custom values', () => {
      assert.notDeepEqual(bass.x, initial.x)
      assert.notDeepEqual(bass.h, initial.h)
      assert.notDeepEqual(bass.font, initial.font)
      assert.notDeepEqual(bass.colors, initial.colors)
      assert.notDeepEqual(bass.darken, initial.darken)
      assert.notDeepEqual(bass.lighten, initial.lighten)
      assert.notDeepEqual(bass.radius, initial.radius)
      assert.notDeepEqual(bass.col, initial.col)
    })

    it('should reset all custom values', () => {
      bass.reset()
      assert.deepEqual(bass.x, initial.x)
      assert.deepEqual(bass.h, initial.h)
      assert.deepEqual(bass.font, initial.font)
      assert.deepEqual(bass.colors, initial.colors)
      assert.deepEqual(bass.darken, initial.darken)
      assert.deepEqual(bass.lighten, initial.lighten)
      assert.deepEqual(bass.radius, initial.radius)
      assert.deepEqual(bass.col, initial.col)
    })
  })

  context('browser', () => {

    let computed, div

    if (typeof window === 'undefined') {
      return false
    }

    function getStyle() {
      return window.getComputedStyle(div)
    }

    before(() => {
      div = document.createElement('div')
      document.body.appendChild(div)
      computed = getStyle()
    })

    it('should be in a windowed environment', () => {
      assert(window)
    })

    it('should style font-size', () => {
      div.style.fontSize = bass.h[1] + 'px'
      computed = getStyle()
      assert.equal(computed.fontSize, bass.h[1] + 'px')
    })

    it('should style font-family', () => {
      div.style.fontFamily = bass.font
      computed = getStyle()
      assert(computed.fontFamily.match(/^\-apple\-system/))
    })

    it('should style padding', () => {
      div.style.padding = bass.x[4] + 'px'
      computed = getStyle()
      assert.equal(computed.paddingTop, bass.x[4] + 'px')
    })

    it('should style color', () => {
      div.style.color = bass.colors.blue
      computed = getStyle()
      assert.equal(computed.color, Color(bass.colors.blue).rgbString())
    })

  })

})

