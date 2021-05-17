import React from 'react'

import Logo from '@components/Logo'
import Container from '@components/layout/Container'

export default function Header() {
  return (
    <Container>
      <div className={'p-4'}>
        <Logo className={'mx-auto'}/>
      </div>
    </Container>
  )
}