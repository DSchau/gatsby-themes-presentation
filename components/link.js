import React from 'react'
import styled from '@emotion/styled'

const omit = (obj, ...args) => {
  const lookup = args.reduce((merged, key) => {
    merged[key] = true
    return merged
  }, {})
  return Object.keys(obj)
    .reduce((filtered, key) => {
      if (!lookup[key]) {
        filtered[key] = obj[key]
      }
      return filtered
    }, {})
}

const Link = styled.a(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: props.textDecoration || 'none',
  ...omit(props, 'theme', 'children')
}))

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export default ({ children, href, ...rest }) => {
  return <Link href={href} {...rest}>{children}</Link>
}
