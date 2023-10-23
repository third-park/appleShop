import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <>
      <div>네스팅루트 사용하자</div>
      <Outlet></Outlet>
    </>
  )
}

export default About