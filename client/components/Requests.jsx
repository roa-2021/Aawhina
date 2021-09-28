import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import RequestCard from './RequestCard'
import Welcome from './Welcome'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

function Requests ({ currentUser, requests }) {
  const { isAuthenticated } = useAuth0();

  const requestsToShow = currentUser ? requests.filter(request => currentUser.id === request.user_id) : requests

  if (isAuthenticated) {
    return (
      <>
        <Container 
          component="main"
          maxWidth="md"
          sx={{ mb: 2 }}
        >
        { !currentUser && <Box mt={4} >
            <Typography variant="h5" align="center">
              These neighbours of yours have requested help:
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
    requests: globalState.requests
  }
}

export default connect(mapState2Props)(Requests)
