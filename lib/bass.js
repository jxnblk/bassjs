
import defaults from './defaults'
import getCols from './get-cols'

class Bass {
  constructor(init) {
    Object.assign(this, init)
  }

  set (obj) {
    if (typeof obj !== 'object') {
      return false
    }
    Object.assign(this, obj)
  }

  /**
   * @method setScale
   * @param {Array} x
  */
  setScale (x) {
    this.set({ x })
  }

  /**
   * @method setTypeScale
   * @param {Array} h
  */
  setTypeScale (h) {
    this.set({ h })
  }

  /**
   * @method setFont
   * @param {string} font
  */
  setFont (font) {
    this.set({ font })
  }

  setBreakpoints (breakpoints) {
    this.set({ breakpoints })
  }

  setColors (colors) {
    this.set({ colors })
  }

  setDarken (darken) {
    this.set({ darken })
  }

  setLighten (lighten) {
    this.set({ lighten })
  }

  setRadius (radius) {
    this.set({ radius })
  }

  setCol (col) {
    this.set({ col })
  }

  setColumns (n) {
    const col = getCols(n)
    this.set({ col })
  }

  reset() {
    this.set(defaults)
  }
}

const bass = bass || new Bass(defaults)

export default bass

