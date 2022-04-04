import React from 'react'
import { Button } from '../../components/button/button'
import { Header } from '../../components/header'
import { Input } from '../../components/input/input'

export const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '50%' }}>
      <Header>React Pokédex</Header>
      <Input type="text" mt="35px" />
      <Button width="100%" mt={2} color="white">
        Buscar!!!!!!
      </Button>
    </div>
  )
}
