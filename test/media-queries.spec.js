
import assert from 'assert'
import mq from '../lib/media-queries'

describe('media-queries', () => {

  it('should return an object of breakpoints', () => {
    const queries = mq.get()
    assert.equal(typeof queries, 'object')
  })

  it('should have an add method', () => {
    assert.equal(typeof mq.add, 'function')
  })

  it('should have an remove method', () => {
    assert.equal(typeof mq.remove, 'function')
  })

  it('should have a matches method', () => {
    assert.equal(typeof mq.matches, 'function')
  })

  it('should have an onUpdate method', () => {
    assert.equal(typeof mq.onUpdate, 'function')
  })

  it('should add a media query', () => {
    mq.add('sm', '(min-width: 40em)')
    assert(mq.sm)
  })

  it('should remove the media query', () => {
    mq.remove('sm')
    assert.equal(mq.sm, undefined)
  })

  describe('browser', () => {

    if (typeof window === 'undefined') {
      return false
    }

    it('should be in a windowed environment', () => {
      assert(window)
    })

    it('should trigger an update when media changes')
    /*
      // Unsure of how to trigger this...
      let handled = false
      mq.onUpdate((e) => { handled = true })
      const resize = new Event('resize')
      window.resizeTo(256, 512)
      window.dispatchEvent(resize)
      // assert.equal(handled, true)
    })
    */

    it('should add a media query', () => {
      mq.add('sm', '(min-width: 1em)')
      assert(mq.sm.matches)
    })

    it('should return true with the matches method', () => {
      assert.equal(mq.matches('sm'), true)
    })

    it('should not match a media query', () => {
      mq.add('xs', '(max-width: 1em)')
      assert.equal(mq.xs.matches, false)
    })

  })
})

