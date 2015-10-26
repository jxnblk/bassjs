
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import assert from 'assert'
import bass from '../lib'
import { Chip, Box } from './Chip'

const renderer = TestUtils.createRenderer()

describe('React rendering', () => {
  let dom, instance, style
  let { colors } = bass

  beforeEach(() => {
    bass.reset()
    renderer.render(<Chip />)
    dom = renderer.getRenderOutput()
  })

  it('should render', () => {
    assert(dom)
  })

  it('should have background color set', () => {
    assert.equal(dom.props.style.backgroundColor, colors.blue)
  })

  context('when changing colors', () => {
    beforeEach(() => {
      bass.reset()
      bass.setColors({
        blue: '#0cf'
      })
      renderer.render(<Chip />)
      dom = renderer.getRenderOutput()
    })

    it('should pick up the new color', () => {
      assert.equal(dom.props.style.backgroundColor, '#0cf')
    })
  })

  context('when changing the colors and using bx', () => {
    beforeEach(() => {
      bass.reset()
      bass.setColors({
        blue: '#0fc'
      })
      renderer.render(<Box />)
      style = renderer.getRenderOutput().props.style
    })

    it('should pick up the new color', () => {
      assert.equal(style.color, '#0fc')
    })
  })

})
