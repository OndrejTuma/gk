import AboutMe from '@components/section/AboutMe'
import React from 'react'
import Head from 'next/head'

import Header from '@components/header/Header'
import HeroMain from '@components/hero/Main'
import MyClients from '@components/section/MyClients'
import MyReferences from '@components/section/MyReferences'
import MySkills from '@components/section/MySkills'

export default function Home() {
  return (
    <div className={'font-primary text-base text-primary'}>
      <Head>
        <title>Gabka Koščová</title>
      </Head>

      <Header/>

      <HeroMain/>

      <MySkills/>

      <MyClients/>

      <MyReferences/>

      <AboutMe/>
    </div>
  )
}