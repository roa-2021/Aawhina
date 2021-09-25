import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { connect } from 'react-redux'

const Logout = () => {
  const { logout } = useAuth0()
  return (

    <Button size='large' variant='contained' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
    
  )
}

export default connect()(Logout) 