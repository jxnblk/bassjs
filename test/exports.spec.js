
import assert from 'assert'

import bass from '../lib'
import {
  x,
  h,
  font,
  colors,
  darken,
  lighten,
  radius,
  col,
  bx,
  keys
} from '../lib'

describe('exports', () => {

  it('should export bass as default', () => {
    assert(bass)
  })

  it('should export x', () => {
    assert(x)
  })

  it('should export h', () => {
    assert(h)
  })

  it('should export font', () => {
    assert(font)
  })

  it('should export colors', () => {
    assert(colors)
  })

  it('should export darken', () => {
    assert(darken)
  })

  it('should export lighten', () => {
    assert(lighten)
  })

  it('should export radius', () => {
    assert(radius)
  })

  it('should export col', () => {
    assert(col)
  })

  it('should export bx', () => {
    assert(bx)
  })

  it('should export keys', () => {
    assert(keys)
  })

})
