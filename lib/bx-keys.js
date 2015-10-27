
import { x, h, col, colors, darken, lighten, radius } from './bass'

function getFontSizes (steps) {
  let obj = {}
  steps.forEach((step, i) => {
    obj['h' + i] = { fontSize: step }
  })
  return obj
}

function getWhiteSpace (steps) {
  let obj = {}
  steps.forEach((step, i) => {
    obj['m' + i] = { margin: step }
    obj['mt' + i] = { marginTop: step }
    obj['mb' + i] = { marginBottom: step }
    obj['mr' + i] = { marginRight: step }
    obj['ml' + i] = { marginLeft: step }
    obj['mx' + i] = { marginLeft: step, marginRight: step }
    obj['my' + i] = { marginTop: step, marginBottom: step }
    obj['p' + i] = { padding: step }
    obj['pt' + i] = { paddingTop: step }
    obj['pb' + i] = { paddingBottom: step }
    obj['pr' + i] = { paddingRight: step }
    obj['pl' + i] = { paddingLeft: step }
    obj['px' + i] = { paddingLeft: step, paddingRight: step }
    obj['py' + i] = { paddingTop: step, paddingBottom: step }
  })
  return obj
}

function getCol (steps) {
  let obj = {}
  steps.forEach((step, i) => {
    obj['col-' + i] = { width: step }
  })
  return obj
}

function getColors (palette) {
  let obj = {}
  Object.keys(palette).forEach((key) => {
    obj[key] = { color: palette[key] }
    obj['bg-' + key] = { backgroundColor: palette[key] }
  })
  return obj
}

function getDarken (steps) {
  let obj = {}
  steps.forEach((step, i) => {
    obj['darken-' + i] = { color: step }
    obj['bg-darken-' + i] = { backgroundColor: step }
  })
  return obj
}

function getLighten (steps) {
  let obj = {}
  steps.forEach((step, i) => {
    obj['lighten-' + i] = { color: step }
    obj['bg-lighten-' + i] = { backgroundColor: step }
  })
  return obj
}

function getHelpers () {
  return {
    bold: { fontWeight: 'bold' },
    regular: { fontWeight: 'normal' },
    caps: { textTransform: 'uppercase', letterSpacing: '.2em' },
    italic: { fontStyle: 'italic' },
    nowrap: { whiteSpace: 'nowrap' },
    'break-word': { wordWrap: 'break-word' },
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    'left-align': { textAlign: 'left' },
    'right-align': { textAlign: 'right' },
    center: { textAlign: 'center' },
    justify: {textAlign: 'justify' },
    inline: { display: 'inline' },
    block: { display: 'block' },
    'inline-block': { display: 'inline-block' },
    table: { display: 'table' },
    'table-cell': { display: 'table-cell' },
    left: { float: 'left' },
    right: { float: 'right' },
    border: { border: '1px solid' },
    'border-top': { borderTop: '1px solid' },
    'border-right': { borderRight: '1px solid' },
    'border-bottom': { borderBottom: '1px solid' },
    'border-left': { borderLeft: '1px solid' },
    rounded: { borderRadius: radius }
  }
}

function getKeys () {
  const keys = Object.assign({},
    getFontSizes(h),
    getWhiteSpace(x),
    getCol(col),
    getColors(colors),
    getDarken(darken),
    getLighten(lighten),
    getHelpers()
  )

  return keys
}

export default getKeys

