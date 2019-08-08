import React from 'react'
import styled from '@emotion/styled'

const Link = styled.a(props => ({
  color: 'inherit',
  textDecoration: props.textDecoration || 'none'
}))

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export default ({ children, href, ...rest }) => {
  return <Link href={href} {...rest}>{children}</Link>
}
