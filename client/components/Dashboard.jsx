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