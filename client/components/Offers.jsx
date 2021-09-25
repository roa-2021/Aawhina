import React from 'react'
import { connect } from 'react-redux'

function Offers ({offers, dispatch}) {
  return ( 
    <>
  <h3>Your offers:</h3>
  {offers}
  {/* <ul>
      {offers.map(offer=> 
          <li>
            <strong>{offer}</strong> 
            <button>recind offer</button>
          </li>
      )}
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
