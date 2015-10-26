
import assert from 'assert'
import bass from '../lib'
import { bx } from '../lib'

describe('bx', () => {

  it('should return an object', () => {
    const style = bx()
    assert.equal(typeof style, 'object')
  })

  it('should return a combined object', () => {
    const style = bx({ fontSize: 16 }, { color: 'blue' })
    assert.deepEqual(style, {
      fontSize: 16,
      color: 'blue'
    })
  })

  it('should combine shorthand and style objects', () => {
    const style = bx('h1', { color: 'blue' })
    assert.deepEqual(style, {
      fontSize: 32,
      color: 'blue'
    })
  })

  it('should not override shorthand values', () => {
    const style = bx('h1', { fontSize: 12 })
    assert.deepEqual(style, {
      fontSize: 32
    })
  })

  it('should not apply arguments that are not strings or objects', () => {
    const style = bx(1, false, null)
    assert.deepEqual(style, {})
  })

  describe('shortcuts', () => {
    describe('type scale shortcutes', () => {
      it('should return "h1" from the bass module', () => {
        const style = bx('h1')
        assert.equal(style.fontSize, bass.h[1])
      })

      it('should return "h2" from the bass module', () => {
        const style = bx('h2')
        assert.equal(style.fontSize, bass.h[2])
      })

      it('should return "h3" from the bass module', () => {
        const style = bx('h3')
        assert.equal(style.fontSize, bass.h[3])
      })

      it('should return "h4" from the bass module', () => {
        const style = bx('h4')
        assert.equal(style.fontSize, bass.h[4])
      })

      it('should return "h5" from the bass module', () => {
        const style = bx('h5')
        assert.equal(style.fontSize, bass.h[5])
      })

      it('should return "h6" from the bass module', () => {
        const style = bx('h6')
        assert.equal(style.fontSize, bass.h[6])
      })
    })

    describe('white space shortcuts', () => {
      bass.x.forEach((step, i) => {
        it(`should return "m${i}" from the bass module`, () => {
          const style = bx('m' + i)
          assert.equal(style.margin, bass.x[i])
        })

        it(`should return "mt${i}" from the bass module`, () => {
          const style = bx('mt' + i)
          assert.equal(style.marginTop, bass.x[i])
        })

        it(`should return "mr${i}" from the bass module`, () => {
          const style = bx('mr' + i)
          assert.equal(style.marginRight, bass.x[i])
        })

        it(`should return "mb${i}" from the bass module`, () => {
          const style = bx('mb' + i)
          assert.equal(style.marginBottom, bass.x[i])
        })

        it(`should return "ml${i}" from the bass module`, () => {
          const style = bx('ml' + i)
          assert.equal(style.marginLeft, bass.x[i])
        })

        it(`should return "mx${i}" from the bass module`, () => {
          const style = bx('mx' + i)
          assert.equal(style.marginLeft, bass.x[i])
          assert.equal(style.marginRight, bass.x[i])
        })

        it(`should return "my${i}" from the bass module`, () => {
          const style = bx('my' + i)
          assert.equal(style.marginTop, bass.x[i])
          assert.equal(style.marginTop, bass.x[i])
        })

        it(`should return "p${i}" from the bass module`, () => {
          const style = bx('p' + i)
          assert.equal(style.padding, bass.x[i])
        })

        it(`should return "pt${i}" from the bass module`, () => {
          const style = bx('pt' + i)
          assert.equal(style.paddingTop, bass.x[i])
        })

        it(`should return "pr${i}" from the bass module`, () => {
          const style = bx('pr' + i)
          assert.equal(style.paddingRight, bass.x[i])
        })

        it(`should return "pb${i}" from the bass module`, () => {
          const style = bx('pb' + i)
          assert.equal(style.paddingBottom, bass.x[i])
        })

        it(`should return "pl${i}" from the bass module`, () => {
          const style = bx('pl' + i)
          assert.equal(style.paddingLeft, bass.x[i])
        })

        it(`should return "px${i}" from the bass module`, () => {
          const style = bx('px' + i)
          assert.equal(style.paddingLeft, bass.x[i])
          assert.equal(style.paddingRight, bass.x[i])
        })

        it(`should return "py${i}" from the bass module`, () => {
          const style = bx('py' + i)
          assert.equal(style.paddingTop, bass.x[i])
          assert.equal(style.paddingTop, bass.x[i])
        })
      })
    })

    describe('col shortcuts', () => {
      bass.col.forEach((step, i) => {
        it(`should return "col-${i}" from the bass module`, () => {
          const style = bx('col-' + i)
          assert.equal(style.width, bass.col[i])
        })
      })
    })

    describe('color shortcuts', () => {
      Object.keys(bass.colors).forEach((key, i) => {
        it(`should return "${key}" from the bass module`, () => {
          const style = bx(key)
          assert.equal(style.color, bass.colors[key])
        })
        it(`should return "bg-${key}" from the bass module`, () => {
          const style = bx('bg-' + key)
          assert.equal(style.backgroundColor, bass.colors[key])
        })
      })
    })

    describe('darken shortcuts', () => {
      bass.darken.forEach((step, i) => {
        it(`should return "darken-${i}" from the bass module`, () => {
          const style = bx('darken-' + i)
          assert.equal(style.color, bass.darken[i])
        })
        it(`should return "bg-darken-${i}" from the bass module`, () => {
          const style = bx('bg-darken-' + i)
          assert.equal(style.backgroundColor, bass.darken[i])
        })
      })
    })

    describe('lighten shortcuts', () => {
      bass.lighten.forEach((step, i) => {
        it(`should return "lighten{i}" from the bass module`, () => {
          const style = bx('lighten-' + i)
          assert.equal(style.color, bass.lighten[i])
        })
        it(`should return "bg-lighten-${i}" from the bass module`, () => {
          const style = bx('bg-lighten-' + i)
          assert.equal(style.backgroundColor, bass.lighten[i])
        })
      })
    })

    describe('helper shortcuts', () => {
      it('should return "bold" from the bass module', () => {
        const style = bx('bold')
        assert.equal(style.fontWeight, 'bold')
      })

      it('should return "regular" from the bass module', () => {
        const style = bx('regular')
        assert.equal(style.fontWeight, 'normal')
      })

      it('should return "caps" from the bass module', () => {
        const style = bx('caps')
        assert.equal(style.textTransform, 'uppercase')
      })

      it('should return "italic" from the bass module', () => {
        const style = bx('italic')
        assert.equal(style.fontStyle, 'italic')
      })

      it('should return "nowrap" from the bass module', () => {
        const style = bx('nowrap')
        assert.equal(style.whiteSpace, 'nowrap')
      })

      it('should return "break-word" from the bass module', () => {
        const style = bx('break-word')
        assert.equal(style.wordWrap, 'break-word')
      })

      it('should return "truncate" from the bass module', () => {
        const style = bx('truncate')
        assert.equal(style.textOverflow, 'ellipsis')
      })

      it('should return "left-align" from the bass module', () => {
        const style = bx('left-align')
        assert.equal(style.textAlign, 'left')
      })

      it('should return "right-align" from the bass module', () => {
        const style = bx('right-align')
        assert.equal(style.textAlign, 'right')
      })

      it('should return "center" from the bass module', () => {
        const style = bx('center')
        assert.equal(style.textAlign, 'center')
      })

      it('should return "justify" from the bass module', () => {
        const style = bx('justify')
        assert.equal(style.textAlign, 'justify')
      })

      it('should return "inline" from the bass module', () => {
        const style = bx('inline')
        assert.equal(style.display, 'inline')
      })

      it('should return "block" from the bass module', () => {
        const style = bx('block')
        assert.equal(style.display, 'block')
      })

      it('should return "inline-block" from the bass module', () => {
        const style = bx('inline-block')
        assert.equal(style.display, 'inline-block')
      })

      it('should return "table" from the bass module', () => {
        const style = bx('table')
        assert.equal(style.display, 'table')
      })

      it('should return "table-cell" from the bass module', () => {
        const style = bx('table-cell')
        assert.equal(style.display, 'table-cell')
      })

      it('should return "left" from the bass module', () => {
        const style = bx('left')
        assert.equal(style.float, 'left')
      })

      it('should return "right" from the bass module', () => {
        const style = bx('right')
        assert.equal(style.float, 'right')
      })
    })
  })

  context('when setting custom values', () => {
    const custom = [128, 72, 64, 48, 32]

    before(() => {
      bass.set({ h: custom })
    })

    after(() => {
      bass.reset()
    })

    it('should pick up custom values', () => {
      const style = bx('h1')
      assert.equal(style.fontSize, custom[1])
    })

    it('should not have values for non-existant steps', () => {
      const style = bx('h6')
      assert.deepEqual(style, {})
    })

    it('should reset custom values', () => {
      bass.reset()
      const style = bx('h1')
      assert.equal(style.fontSize, 32)
    })
  })

})

