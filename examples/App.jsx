
import React from 'react'
import {
  sans,
  h1, h2, h3,
  h4, h5, h6,
  scale,
  X,
  lighten,
  darken,
  hues
} from '../src'

export default class App extends React.Component {

  render() {
    const styles = {
      root: {
        fontFamily: sans,
        padding: scale[6],
      }
    }

    return (
      <div style={styles.root}>
        <h1>bassjs</h1>
        <div>
          {darken.map((color, i) => {
            return (
              <div key={i} style={{
                padding: scale[3],
                backgroundColor: darken[i]
              }}>
              darken[{i}]
            </div>
            )
          })}
        </div>
        <div>
          {hues.map((hue, i) => {
            return (
              <div key={i}>
                {hue.map((step, i) => {
                  return (
                    <div key={i} style={{
                        display: 'inline-block',
                        padding: scale[1],
                        margin: scale[1],
                        backgroundColor: step
                      }}>
                      {step}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

