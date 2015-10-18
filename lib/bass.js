
import defaults from './defaults'
import getCols from './get-cols'

class Bass {
  constructor(init) {
    Object.assign(this, init)
  }

  set (obj) {
    Object.assign(this, obj)
  }

  setScale (x) {
    this.set({ x })
  }

  setTypeScale (h) {
    this.set({ h })
  }

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

