import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent, Stack } from '@mui/material'
import { connect } from 'react-redux'
import Requests from './MyRequests';

function Offers ({ currentUser, offers, requests }) {
  
  const requestArr = []
  const [viewRequests, setviewRequests] = useState(false)

  const clickHandler = () => {
    setviewRequests(true)
  }
currentUser 
    ? requests.map(request => {
      currentUser.id === request.user_id 
        ? requestArr.push(request.id)
        : null
      })
    : null

  const offersToShow = offers ? offers.filter(offer => requestArr.indexOf(offer.request_id) !== -1) : null

  return (
    <> {viewRequests ? <Requests /> : null }
      <Container 
        component="main"
        maxWidth="md" 
      >
        { !currentUser && <Box // don't show the text in this box if there's a current user. TODO: Pass that prop from dashboard
          mt={4}>
          <Typography variant="h5" align="center">
            These neighbours of yours have offered help:
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
            { offersToShow && offersToShow.map(offer => <RequestCard request={offer} />)}
            <Grid 
              item
              mt={2}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button 
              value='requests'
                variant="contained"
                size="large"
                onClick={clickHandler}
              >
                Explore requests for help
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
    requests: globalState.requests,
    users: globalState.users
  }
}

export default connect(mapState2Props)(Offers)
