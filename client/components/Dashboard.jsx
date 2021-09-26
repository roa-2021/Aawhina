import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './MyOffers';
import Requests from './MyRequests';
import Nav from './Nav'
import { useAuth0 } from '@auth0/auth0-react'



function Dashboard({dispatch, users}) {
  const { user, isAuthenticated, isLoading } = useAuth0()


  useEffect(() => {
    const thisUser = users.find(u => u.email === user.email)
    setCurrentUser(thisUser)
  }, [])
  
  const [currentUser, setCurrentUser] = useState({})
  const [offers, setOffers] = useState(true)
  const [alignment, setAlignment] = useState('offers');

const toggleOffers = () => {
  setOffers(true)
}

const toggleRequests = () => {
  setOffers(false)
}

const handleChange = (event, newAlignment) => {
  setAlignment(newAlignment);
};

return (
  <>
    <Nav />
    <ToggleButtonGroup
      size="large"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value='offers' onClick={toggleOffers}>Offers</ToggleButton>
      <ToggleButton value='requests' onClick={toggleRequests}>Requests</ToggleButton>
    </ToggleButtonGroup>
      {offers
        ? <Offers currentUser={currentUser}/>
        : <Requests currentUser={currentUser} />}
  </>
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