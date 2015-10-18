# bassjs

Javascript styles object including helper methods for use with React or similar templating systems.

## Getting Started

```bash
npm i bassjs
```

```js
// Example
import React from 'react'
import { h, x, colors } from 'bassjs'

class Heading extends React.Component {
  render() {
    const { children, color } = this.props

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

    const style = {
      fontSize: h[1],
      marginTop: x[2],
      marginBottom: x[1],
      color: colors[color]
    }

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

MIT License

