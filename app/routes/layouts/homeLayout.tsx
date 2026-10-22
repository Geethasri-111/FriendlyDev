import React from 'react'
import { Outlet } from 'react-router'
import Hero from '~/components/Hero'

const homeLayout = () => {
  return (
    <>
        <Hero name="Guest" />
        <section  className="max-w-6xl mx-auto px-6 my-8">
            <Outlet/>
        </section>
    </>
  )
}

export default homeLayout