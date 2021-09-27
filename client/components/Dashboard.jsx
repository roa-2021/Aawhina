import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Container from '@mui/material/Container'
import { useAuth0 } from '@auth0/auth0-react'
import Welcome from './Welcome'
import Requests from './Requests'
import Offers from './Offers'



function Dashboard({dispatch, users}) {
  
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [currentUser, setCurrentUser] = useState({})
  const [offers, setOffers] = useState(true)
  const [alignment, setAlignment] = useState('offers');

  useEffect(() => {
    const thisUser = users.find(u => u.email === user.email)
    setCurrentUser(thisUser)
  }, [user])
  
  const toggleOffers = () => {
    setOffers(true)
  }

  const toggleRequests = () => {
    setOffers(false)
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  if (isAuthenticated) {
    return (
      <>
        <Container
          maxWidth="md"
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ToggleButtonGroup
            size="large"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value='offers' onClick={toggleOffers}>My Offers</ToggleButton>
            <ToggleButton value='requests' onClick={toggleRequests}>My Requests</ToggleButton>
          </ToggleButtonGroup>
        </Container>
        {offers
          ? <Offers currentUser={currentUser}/>
          : <Requests currentUser={currentUser} />
        }
      </>
    )
  }
  return (
    < Welcome />
  )
}


function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users
    }
  }


export default connect(mapState2Props)(Dashboard)