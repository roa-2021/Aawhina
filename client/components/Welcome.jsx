import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Register from './Register'
import Link from 'react-router-dom'
import Logout from './Logout'
import Nav from './Nav'

function Welcome () {

  return (
    <>
      <Nav/>
      <Login/>
      <Logout/>
    </>
  )
}

export default connect()(Welcome)
