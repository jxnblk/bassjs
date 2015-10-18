
import test from 'ava'
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

// Types
test('should be an object', t => {
  t.pass(t.is(typeof bass, 'object'))
  t.end()
})

test('x should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.x)))
  t.end()
})

test('h should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.h)))
  t.end()
})

test('font should be a string', t => {
  t.pass(t.is(typeof bass.font, 'string'))
  t.end()
})

test('breakpoints should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.breakpoints)))
  t.end()
})

test('colors should be an object', t => {
  t.pass(t.is(typeof bass.colors, 'object'))
  t.end()
})

test('darken should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.darken)))
  t.end()
})

test('lighten should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.lighten)))
  t.end()
})

test('radius should be a number', t => {
  t.pass(t.is(typeof bass.radius, 'number'))
  t.end()
})

test('col should be an array', t => {
  t.pass(t.ok(Array.isArray(bass.col)))
  t.end()
})


// Initial values
test('x should match default values', t => {
  t.pass(t.same(bass.x, initial.x))
  t.end()
})

test('h should match default values', t => {
  t.pass(t.same(bass.h, initial.h))
  t.end()
})

test('font should match default values', t => {
  t.pass(t.same(bass.font, initial.font))
  t.end()
})

test('breakpoints should match default values', t => {
  t.pass(t.same(bass.breakpoints, initial.breakpoints))
  t.end()
})

test('colors should match default values', t => {
  t.pass(t.same(bass.colors, initial.colors))
  t.end()
})

test('darken should match default values', t => {
  t.pass(t.same(bass.darken, initial.darken))
  t.end()
})

test('lighten should match default values', t => {
  t.pass(t.same(bass.lighten, initial.lighten))
  t.end()
})

test('radius should match default values', t => {
  t.pass(t.same(bass.radius, initial.radius))
  t.end()
})

test('col should match default values', t => {
  t.pass(t.same(bass.col, initial.col))
  t.end()
})


// Methods
test('set should be a function', t => {
  t.pass(t.is(typeof bass.set, 'function'))
  t.end()
})

test('setScale should be a function', t => {
  t.pass(t.is(typeof bass.setScale, 'function'))
  t.end()
})

test('setTypeScale should be a function', t => {
  t.pass(t.is(typeof bass.setTypeScale, 'function'))
  t.end()
})

test('setFont should be a function', t => {
  t.pass(t.is(typeof bass.setFont, 'function'))
  t.end()
})

test('setBreakpoints should be a function', t => {
  t.pass(t.is(typeof bass.setBreakpoints, 'function'))
  t.end()
})

test('setColors should be a function', t => {
  t.pass(t.is(typeof bass.setColors, 'function'))
  t.end()
})

test('setDarken should be a function', t => {
  t.pass(t.is(typeof bass.setDarken, 'function'))
  t.end()
})

test('setLighten should be a function', t => {
  t.pass(t.is(typeof bass.setLighten, 'function'))
  t.end()
})

test('setRadius should be a function', t => {
  t.pass(t.is(typeof bass.setRadius, 'function'))
  t.end()
})

test('setCol should be a function', t => {
  t.pass(t.is(typeof bass.setCol, 'function'))
  t.end()
})

test('reset should be a function', t => {
  t.pass(t.is(typeof bass.reset, 'function'))
  t.end()
})

// Set methods
test('set should change the values', t => {
  custom = [0, 6, 12, 24]
  bass.set({ x: custom })
  t.pass(t.notSame(bass.x, initial.x))
  t.end()
})

test('set should keep the custom values', t => {
  t.pass(t.same(bass.x, custom))
  t.end()
})

test('reset should set defaults', t => {
  bass.reset()
  t.pass(t.same(bass.x, initial.x))
  t.end()
})

test('setScale should change the scale', t => {
  bass.setScale(custom)
  t.pass(t.notSame(bass.x, initial.x))
  t.pass(t.same(bass.x, custom))
  t.end()
})

test('setTypeScale should change the scale', t => {
  custom = [128, 64, 48, 32]
  bass.setTypeScale(custom)
  t.pass(t.notSame(bass.h, initial.h))
  t.pass(t.same(bass.h, custom))
  t.end()
})

test('setFont should change the font', t => {
  custom = 'Georgia, serif'
  bass.setFont(custom)
  t.pass(t.not(bass.font, initial.font))
  t.pass(t.is(bass.font, custom))
  t.end()
})

test('setBreakpoints should change the breakpoints', t => {
  custom = [ '(min-width: 40em)' ]
  bass.setBreakpoints(custom)
  t.pass(t.notSame(bass.breakpoints, initial.breakpoints))
  t.pass(t.same(bass.breakpoints, custom))
  t.end()
})

test('setColors should change the colors', t => {
  custom = { blue: '#0cf' }
  bass.setColors(custom)
  t.pass(t.notSame(bass.colors, initial.colors))
  t.pass(t.same(bass.colors, custom))
  t.end()
})

test('setDarken should change the colors', t => {
  custom = [ 'rgba(0,0,0,.25)' ]
  bass.setDarken(custom)
  t.pass(t.notSame(bass.darken, initial.darken))
  t.pass(t.same(bass.darken, custom))
  t.end()
})

test('setLighten should change the colors', t => {
  custom = [ 'rgba(255,255,255,.25)' ]
  bass.setLighten(custom)
  t.pass(t.notSame(bass.lighten, initial.lighten))
  t.pass(t.same(bass.lighten, custom))
  t.end()
})

test('setRadius should change the radius', t => {
  custom = 6
  bass.setRadius(custom)
  t.pass(t.not(bass.radius, initial.radius))
  t.pass(t.is(bass.radius, custom))
  t.end()
})

test('setCol should change the widths', t => {
  custom = [ '25%' ]
  bass.setCol(custom)
  t.pass(t.notSame(bass.col, initial.col))
  t.pass(t.same(bass.col, custom))
  t.end()
})

test('bass should keep all custom values', t => {
  t.pass(t.notSame(bass.x, initial.x))
  t.pass(t.notSame(bass.h, initial.h))
  t.pass(t.not(bass.font, initial.font))
  t.pass(t.notSame(bass.breakpoints, initial.breakpoints))
  t.pass(t.notSame(bass.colors, initial.colors))
  t.pass(t.notSame(bass.darken, initial.darken))
  t.pass(t.notSame(bass.lighten, initial.lighten))
  t.pass(t.not(bass.radius, initial.radius))
  t.pass(t.notSame(bass.col, initial.col))
  t.end()
})

test('reset should set defaults', t => {
  bass.reset()
  t.pass(t.same(bass.x, initial.x))
  t.pass(t.same(bass.h, initial.h))
  t.pass(t.is(bass.font, initial.font))
  t.pass(t.same(bass.breakpoints, initial.breakpoints))
  t.pass(t.same(bass.colors, initial.colors))
  t.pass(t.same(bass.darken, initial.darken))
  t.pass(t.same(bass.lighten, initial.lighten))
  t.pass(t.is(bass.radius, initial.radius))
  t.pass(t.same(bass.col, initial.col))
  t.end()
})

