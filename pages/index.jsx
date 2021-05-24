import React from 'react'
import Head from 'next/head'

import HeroMain from '@components/hero/Main'
import Header from '@components/header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabka Koščová</title>
      </Head>
      <Header/>
      <HeroMain/>
    </>
  )
}