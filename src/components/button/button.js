import React, { memo } from 'react'
import styled from 'styled-components'
import { color, layout, space } from 'styled-system'

export const StyledButton = styled.button`
  ${space};
  ${layout};
  ${color};
  border-radius: 4px;
  padding: 4px;
  background: #a85beb;
  display: flex;
  border: none;
  justify-content: center;
  cursor: pointer;
`

export const Button = memo(({ children, ...props }) => {
  return <StyledButton {...props}> {children} </StyledButton>
})
