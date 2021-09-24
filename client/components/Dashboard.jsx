import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './Offers';
import Requests from './Requests';

export default function Dashboard() {

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
  <div className="toggle-buttons">
  <ToggleButtonGroup
    size="large" 
    color="warning"
    value={alignment}
      exclusive
      onChange={handleChange}
  >
    <ToggleButton value='offers' onClick={toggleOffers}><strong>Offers</strong></ToggleButton>
    <ToggleButton value='requests' onClick={toggleRequests}><strong>Requests</strong></ToggleButton>
  </ToggleButtonGroup>
  </div>
  </>
  <div className="offers-requests-container">
   {
     offers
     ? <Offers />
     : <Requests />
   }
  </div>
</>
)
}