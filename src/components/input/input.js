import React, { memo } from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const StyledInput = styled.input`
  ${space};
  ${layout};
  padding: 2px;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #81b9f0;
  }
`

export const Input = memo(({ type, ...props }) => {
  return <StyledInput type={type} {...props} />
})
