# bassjs

Javascript styles object including helper methods for use with React or similar templating systems.

## Getting Started

```bash
npm i bassjs
```

```js
// Example
import React from 'react'
import bass from 'bassjs'

class Heading extends React.Component {
  render() {
    const { children, color } = this.props
    const { h, x, colors } = bass
    const style = {
      fontSize: h[1],
      marginTop: x[2],
      marginBottom: x[1],
      color: colors[color]
    }

    return (
      <h1 style={styles} {...children} />
    )
  }
}

export default Heading
```

Or, with the `bx` atomizer helper function.

```js
import React from 'react'
import { bx } from 'bassjs'

class Heading extends React.Component {
  render() {
    const { children, color } = this.props

    return (
      <h1 style={bx('h1', 'mt2', 'mb1', color, { letterSpacing: '.1em' })}
        {...children} />
    )
  }
}

export default Heading
```

## API

### bass

The core module exports an instance of the private `Bass` class, which stores various properties for use as inline styles.

#### Properties

- `x` - array of ascending numbers for using with margin, padding and other spacing
- `h` - array of descending numbers for use with font-size
- `font` - string for font-family
- `colors` - object of colors
- `darken` - array of black rgba colors for darkening
- `lighten` - array of white rgba colors for lightening
- `radius` - number for border-radii
- `col` - array of percentages based on a 12 column grid for use as widths

See [`lib/defaults.js`](lib/defaults.js) for default values.

#### Methods

- `set(Object)` - sets custom values
- `setScale(Array)` - sets a custom `x` scale
- `setTypeScale(Array)` - sets a custom `h` scale
- `setFont(string)` - sets a custom `font`
- `setColors(Object)` - sets custom `colors`
- `setDarken(Array)` - sets a custom `darken` array
- `setLighten(Array)` - sets a custom `lighten` array
- `setRadius(number)` - sets a custom `radius`
- `setCol(Array)` - sets a custom `col` array
- `setColumns(number)` - creates a custom `col` array based on the number of columns
- `reset()` - resets `bass` module to default values


### bx

This helper function returns a JavaScript style object based on the parameters passed to it.
This function accepts bassjs shortcuts to set commonly used styles.
For example `bx('mb2')` returns `{ marginBottom: 16 }`.
`bx` also accepts custom style objects as parameters and will apply all styles that do not conflict with other shortcuts passed as parameters.

Pass style objects along with shortcuts.

```js
bx('mb2', { color: 'blue' })
// { marginBottom: 16, color: 'blue' }
```

Style objects that conflict with shortcuts will be ignored.

```js
bx('mb2', { marginBottom: 10 })
// { marginBottom: 16 }
```

#### Shortcuts

- `h1` – `h6` returns `fontSize` based on the `bass` module’s `h` scale
- `m0` – `m4` returns `margin` based on the `bass` module’s `x` scale
- `mtN`, `mrN`, `mbN`, `mlN` return margin top, right, bottom, and left respectively
- `mxN` and `myN` return margin left and right (x-axis) and margin top and bottom (y-axis) respectively
- `p0` – `p4` returns `padding` based on the `bass` module’s `x` scale
- `ptN`, `prN`, `pbN`, `plN` return padding top, right, bottom, and left respectively
- `pxN` and `pyN` return padding left and right (x-axis) and padding top and bottom (y-axis) respectively
- `col-1` – `col-12` returns `width` based on a 12 column grid - e.g. `col-3` returns `{ width: '25%' }`, which is 3 ÷ 12
- `blue` and `bg-blue` return `{ color: '#0074D9' }` and `{ backgroundColor: '#0074D9' }` - all key from `bass.colors` have these shortcuts.
- `darken-1` – `darken-4` return `color` based on the `bass.darken` array
- `bg-darken-1` – `bg-darken-4` return `backgroundColor` based on the `bass.darken` array
- `lighten-1` – `lighten-4` return `color` based on the `bass.lighten` array
- `bg-lighten-1` – `bg-lighten-4` return `backgroundColor` based on the `bass.lighten` array

The `bx` function also provides these helper shortcuts:

- `bold` - `{ fontWeight: 'bold' }`
- `regular` - `{ fontWeight: 'normal' }`
- `caps` - `{ textTransform: 'uppercase', letterSpacing: '.2em' }`
- `italic` -  `{ fontStyle: 'italic' }`
- `nowrap` - `{ whiteSpace: 'nowrap' }`
- `'break-word'` - `{ wordWrap: 'break-word' }`
- `truncate` - `{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }`
- `'left-align'` - `{ textAlign: 'left' }`
- `'right-align'` - `{ textAlign: 'right' }`
- `center` - `{ textAlign: 'center' }`
- `justify` - `{textAlign: 'justify' }`
- `inline` - `{ display: 'inline' }`
- `block` - `{ display: 'block' }`
- `'inline-block'` - `{ display: 'inline-block' }`
- `table` - `{ display: 'table' }`
- `'table-cell'` - `{ display: 'table-cell' }`
- `left` - `{ float: 'left' }`
- `right` - `{ float: 'right' }`

See [`lib/bx-keys.js`](lib/bx-keys.js) for details.

## Tests

These modules use mocha and karma for browser-based testing.

```
npm test
```

MIT License

