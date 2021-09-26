import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import requests from '../../request.json'
import RequestCard from './RequestCard'

function Requests ({ currentUser, requests }) {
  console.log(currentUser)
  // user = {id: 1, name: "Matt"}
  
  const requestsToShow = currentUser ? requests.filter(request => currentUser.id === request.user_id) : requests

  return (
    <>
      <Container 
        component="main"
        maxWidth="md" 
      >
        { !currentUser && <Box // don't show the text in this box if there's a current user. TODO: Pass that prop from dashboard
          mt={4}
        >

          <Typography variant="h5" align="center">
            These neighbours of yours have requested help:
          </Typography>
        </Box>}
        <Box mt={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            aligncards="stretch"
            rowSpacing={2} 
          >
            { requestsToShow && requestsToShow.map(request => <RequestCard request={request} />)}
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
    </>)
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests
  }
}

export default connect(mapState2Props)(Requests)
