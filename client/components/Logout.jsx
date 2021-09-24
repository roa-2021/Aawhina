import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Logout = () => {
  const { logout } = useAuth0()

  return (
    <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
    </Box>
  )
}

export default Logout