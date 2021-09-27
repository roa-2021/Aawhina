import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { connect } from 'react-redux'
import Link from '@mui/material/Link'

const Logout = () => {
  const { logout } = useAuth0()
  return (

    <Link
      // size='large' 
      // variant='contained' 
      style={{ background: '#91A6FF' }}
      color="#91A6FF"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Link>
    
  )
}

export default connect()(Logout) 