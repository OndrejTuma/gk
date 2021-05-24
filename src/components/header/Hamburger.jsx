import React from 'react'

export const id = 'hamburger'

export default function Hamburger() {
  return (
    <>
      <label htmlFor={id} className={'lg:hidden text-xl'}>=</label>
      <input id={id} type={'checkbox'} className={'opacity-0 lg:hidden'}/>
    </>
  )
}