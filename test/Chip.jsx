
import React from 'react'
import bass, { bx } from '../lib'


export const Chip = () => {
  const { x, colors } = bass
  return (
    <div style={{
      padding: x[4],
      backgroundColor: colors.blue
    }} />
  )
}

export const Box = () => {
  return (
    <div style={bx('blue')} />
  )
}

