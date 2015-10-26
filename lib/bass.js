
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

  get(key) {
    return this[key]
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

const createBass = () => new Bass(defaults)
let bass = createBass()

export default bass

