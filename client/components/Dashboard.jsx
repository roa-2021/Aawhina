import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function Dashboard() {
  const [userRole, setUserRole] = React.useState('offers')

  const handleUserRole = (event, newUserRole) => {
    setUserRole(newUserRole)
  }

  return (
    <ToggleButtonGroup
      value={userRole}
      exclusive
      onChange={handleUserRole}
      aria-label="userRole">
      <ToggleButton 
          size="large" 
          color="primary" 
          value="offers" 
          aria-label="Offers">
                Offers
      </ToggleButton>
      <ToggleButton 
          size="large" 
          color="primary"
          value="justify" 
          aria-label="Requests"> 
                Requests
      </ToggleButton>
    </ToggleButtonGroup>
  )
}