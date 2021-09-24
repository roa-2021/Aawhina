import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Offers from './Offers';
import Requests from './Requests';

export default function Dashboard() {

  const [offers, setOffers] = React.useState(true);

const toggleForms = () => {
  setOffers(!offers)
}

return (
  <>
  <>
  <ToggleButtonGroup exclusive onChange={toggleForms}>
    <ToggleButton>Offers</ToggleButton>
    <ToggleButton>Requests</ToggleButton>
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