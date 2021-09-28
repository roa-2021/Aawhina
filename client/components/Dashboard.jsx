import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Container from '@mui/material/Container'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './Offers'
import Requests from './Requests'
import Welcome from './Welcome'

function Dashboard({ users, currentUser }) {
  
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [offers, setOffers] = useState(true)
  const [alignment, setAlignment] = useState('offers');
  let history = useHistory()

  const toggleOffers = () => {
    setOffers(true)
  }

  const toggleRequests = () => {
    setOffers(false)
  }

  const handleChange = (newAlignment) => {
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
          : <Requests currentUser={currentUser}/>
        }
      </>
    )

  } return (<Welcome />)
}



function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users,
    currentUser: globalState.currentUser
    }
  }


export default connect(mapState2Props)(Dashboard)