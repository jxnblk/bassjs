
const win = typeof window !== 'undefined' ? window : false

class MediaQueries {

  constructor() {
    this.handler = null
  }

  add (key, query) {
    if (!win) {
      this[key] = query
    } else {
      this[key] = win.matchMedia(query)
      this[key].addListener(this.handleUpdate)
    }
  }

  remove (key) {
    delete this[key]
  }

  matches (key) {
    if (!this[key]) {
      return false
    }
    return this[key].matches || false
  }

  handleUpdate(e) {
    console.log('handleUpdate', e)
  }

  onUpdate(handler) {
    this.handler = handler
  }

}

const mq = mq || new MediaQueries()

export default mq
