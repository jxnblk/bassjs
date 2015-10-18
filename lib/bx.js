
import { x, h, colors, darken, lighten } from './bass'

// This might not work as a const
const keys = {
  'h1': { fontSize: h[1] }
  'h2': { fontSize: h[2] }
  'h3': { fontSize: h[3] }
  'h4': { fontSize: h[4] }
  'h5': { fontSize: h[5] }
  'h6': { fontSize: h[6] }
}

function bx (...args) {
  console.log('args', args, args.length)

  let style = {}

  args.forEach((arg) => {
    if (typeof arg === 'object') {
      Object.assign(style, arg)
    } else if (typeof arg === 'string') {
      if (keys[arg]) {
        Object.assign(style, keys[arg])
      } else {
        console.log('No key found for ', arg)
      }
    } else {
      console.error('Arguments for bx must be a string or object')
    }
  })

  return style
}

export default bx

