import * as React from 'react'
import { connect } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './Offers';
import Requests from './Requests';
import Nav from './Nav'

export default function Dashboard({dispatch, offers}) {

  const [offers, setOffers] = React.useState(true)
  const [alignment, setAlignment] = React.useState('offers');

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
  <>
  <Nav/>
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
  </>
  <>
   {
     offers
     ? <Offers />
     : <Requests />
   }
</>
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