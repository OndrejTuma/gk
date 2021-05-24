import React from 'react'

import Container from '@components/layout/Container'
import Logo from '@components/header/Logo'
import Menu from '@components/header/Menu'

export default function Header() {
  return (
    <Container>
      <div className={'flex items-center justify-between p-4 lg:pt-9 lg:pb-5 lg:px-0'}>
        <Logo className={'mx-auto md:mx-0'}/>
        <Menu/>
      </div>
    </Container>
  )
}