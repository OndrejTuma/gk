import React from 'react'

import StrikeLine from '@components/hero/StrikeLine'

export default function Main() {
  return (
    <div className={'p-7 bg-hero bg-cover bg-dark text-xl leading-none flex justify-end md:text-3xl lg:bg-bigger xl:bg-cover 3xl:py-24'}>
      <div className={'w-full xl:w-6/12'}>
        <div className={'max-w-xs md:max-w-screen-sm'}>
          <div className={'font-secondary text-secondary transform -rotate-3 mt-4 mb-2'}>Zrozumitel’né</div>
          <h1 className={'font-primary text-white tracking-widest'}>
            <span className={'relative'}>
              <StrikeLine/>Najlepšie
            </span> texty,<br/> ktoré predávajú!
          </h1>
          <div className={'font-secondary text-secondary text-center transform -rotate-3 mb-4'}>Napíšem ich za vás</div>
        </div>
      </div>
    </div>
  )
}