import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import RequestCard from './RequestCard'
import Nav from './Nav'
import Welcome from './Welcome'
import { useAuth0 } from '@auth0/auth0-react'

function Requests ({ currentUser, requests }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  // const requestsToShow = currentUser ? requests.filter(request => currentUser.id === request.user_id) : requests
  if (isAuthenticated) {
  return (
    <>
      <Container 
        component="main"
        maxWidth="md" 
      >
       <Box mt={4} >
          <Typography variant="h5" align="center">
            These neighbours of yours have requested help:
          </Typography>
        </Box>

        <Box mt={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            aligncards="stretch"
            rowSpacing={2} 
          >
            { requests.map(request => <RequestCard request={request} />)}
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
                //?? will this be a route or ternery??
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>)
  }
  return (< Welcome />)
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests
  }
}

export default connect(mapState2Props)(Requests)
