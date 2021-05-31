import React from 'react'
import Head from 'next/head'

import AboutMe from '@components/section/AboutMe'
import Contact from '@components/section/Contact'
import Footer from '@components/section/Footer'
import Header from '@components/header/Header'
import HeroMain from '@components/hero/Main'
import LatestNews from '@components/section/LatestNews'
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

      <div id={'reference'}>
        <MyClients/>
      </div>

      <MyReferences/>

      <div id={'o-mne'}>
        <AboutMe/>
      </div>

      <div id={'kontakt'}>
        <Contact/>
      </div>

      <LatestNews/>

      <Footer/>
    </div>
  )
}