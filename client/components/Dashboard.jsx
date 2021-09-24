import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './Offers';
import Requests from './Requests';

export default function Dashboard() {

  const [offers, setOffers] = React.useState(true)

const toggleOffers = () => {
  setOffers(true)
}

const toggleRequests = () => {
  setOffers(false)
}

return (
  <>
  <>
  <ToggleButtonGroup 
    color="warning"
  size="large" 
  // exclusive onChange={toggleForms}
  >
    <ToggleButton onClick={toggleOffers}>Offers</ToggleButton>
    <ToggleButton onClick={toggleRequests}>Requests</ToggleButton>
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