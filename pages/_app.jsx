// @flow
import React from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const GK = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default GK
