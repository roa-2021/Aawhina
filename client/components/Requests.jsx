import React from 'react'
import { connect } from 'react-redux'
function Requests ({requests, dispatch}) {
 return ( 
   <>
 <h3>Your requests:</h3>
 <ul>
  <li>{requests}</li>
  <li>request</li>
  <li>request</li>
 </ul>

<button>Make a request</button>
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

export default connect(mapState2Props)(Requests)