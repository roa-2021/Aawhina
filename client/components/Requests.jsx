import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { getSuburb } from '../apis/suburb_api'
import { getUser } from '../apis/users_api'

import RequestCard from './RequestCard'
import Welcome from './Welcome'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'

function Requests ({ currentUser, requests, users }) {
  const { user, isAuthenticated } = useAuth0();
  
  const [isFiltered, setIsFiltered] = useState(false)
  const [suburb, setSuburb] = useState(null) // the suburb of the user returned from Auth0
  const [requestsToShow, setRequestsToShow] = useState(requests)

  useEffect(() => {
    if (user) {
      const setUser = users.find(dbUser => user.email === dbUser.email)
      getSuburb(setUser.suburb_id)
        .then(res => setSuburb(res))
    }},[user])

  if (currentUser) {
    const userRequests = requests.filter(request => currentUser.id === request.user_id)
    setRequestsToShow(userRequests)
  }

  const handleFilter = () => {
    //  // sets currentUser without currentUser because reasons
    // const userNeighbours = suburbs.find(suburb => suburb.id === user.suburb_id).neighbours // gets the neighbours of the current user's (not currentUser!) suburb
    console.log(localSuburbs)
    const localSuburbs = [suburb.id, ...suburb.neighbours] // creates a suburb array of current suburb and neighbours
    // filter requests for those with suburb in localSuburbs
    const requestArray = []
    localSuburbs.map(suburb => {
      // console.log(suburb)
      requests.map(request => {
        if (suburb.id === request.suburb_id) {
          requestArray.push(request)
        }
      })
    })
    setRequestsToShow(requestArray)
    setIsFiltered(!true)
  }

  if (isAuthenticated) {
    return (
      <>
        <Container 
          component="main"
          maxWidth="md"
          sx={{ mb: 2 }}
        >
        { !currentUser && 
          <Box mt={4} >
            <Typography variant="h5" align="center">
              These neighbours of yours have requested help:<br />
            <Link 
              variant="body2"
              underline="hover"
              onClick={handleFilter}
              align="center"
              >
              { isFiltered ? "Remove Filter" : "Filter requests to those nearest you"}
            </Link>
            </Typography>
          </Box>
        }
          <Box mt={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              aligncards="stretch"
              rowSpacing={2} 
            >
              { requestsToShow?.map(request => <RequestCard key={request.id} request={request} />)}
              <Grid 
                item
                mt={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button 
                  variant="contained"
                  size="large"
                  href="/requests/new"
                >
                  Make a request 
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    )
  } return (<Welcome />)
}

function mapState2Props (globalState) {
  return {
    requests: globalState.requests,
    users: globalState.users
  }
}

export default connect(mapState2Props)(Requests)
