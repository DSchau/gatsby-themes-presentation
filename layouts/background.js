import React from 'react'
import { Invert } from 'mdx-deck'

export default function Background({ background, children, color = '#fff', flexDirection }) {
  return <Invert css={{
    background,
    color,
    flexDirection,
  }}>{children}</Invert>
}
