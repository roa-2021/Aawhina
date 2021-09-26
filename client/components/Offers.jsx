import React from 'react'
import { connect } from 'react-redux'

function Offers ({offers, dispatch}) {
  postOfferThunk
  
  return ( 
    <>
  <h3>Your offers:</h3>
  {/* <ul>
      {offers.map(offer=> 
          <li>
            <strong>{offer}</strong>
            <button>recind offer</button>
          </li>
      )}
      </ul> */}
      
      {/* <ul>
  <li>Offer</li> <button>recind offer</button>
  <li>Offer</li> <button>recind offer</button>
  <li>Offer</li> <button>recind offer</button>
 </ul> */}
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

export default connect(mapState2Props)(Offers)
