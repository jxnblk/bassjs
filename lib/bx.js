
import log from 'loglevel'
import getKeys from './bx-keys'

function bx (...args) {

  let style = {}
  const keys = getKeys()
  let shortcuts = []

  args.forEach((arg) => {
    if (typeof arg === 'object') {
      Object.assign(style, arg)
    } else if (typeof arg === 'string') {
      if (keys[arg]) {
        shortcuts.push(keys[arg])
      } else {
        log.info('No key found for ', arg)
      }
    } else {
      log.error('Arguments for bx must be a string or object')
    }
  })

  shortcuts.forEach((shortcut) => {
    Object.assign(style, shortcut)
  })

  return style
}

export default bx

