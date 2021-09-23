import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// export default function Dashboard() {

//   const [offers, setOffers] = React.useState('left');

// const handleOffers = (event, newOffers) => {
//   setOffers(newOffers);
// }

// const changeToRequests = () => {
//   setOffers('Right')
// }

// const changeToOffers = () => {
//   setOffers('Left')
// }

// return (
//   <ToggleButtonGroup
//     value={offers}
//     exclusive
//     onChange={handleOffers}
//     aria-label="text offers"
//   >
//     <ToggleButton value="left" >
//       Offers
//     </ToggleButton>

//     <ToggleButton value="Right" >
//       Requests
//     </ToggleButton>
    
//   </ToggleButtonGroup>
// // {
// //   offers
// //   ? <p>Left</p>
// //   : <p>Right</p>
// // }
// )
// }






export default function Dashboard() {

  const [offers, setOffers] = React.useState(true);

const handleOffers = (event, newOffers) => {
  setOffers(newOffers);
}

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
   {/* <p>hello</p> */}
   {
     offers
     ? <p>offers</p>
     : <p>requests</p>
   }
</>
</>
)
}