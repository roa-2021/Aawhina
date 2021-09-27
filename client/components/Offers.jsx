import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent, Stack } from '@mui/material'
import { connect } from 'react-redux'
import Requests from './Requests';

function Offers ({ currentUser, offers, requests }) {
  
  // const requestArr = []
  // currentUser 
  //   ? requests.map(request => {
  //     currentUser.id === request.user_id 
  //       ? requestArr.push(request.id)
  //       : null
  //     })
  //   : null
  // const offersToShow = offers ? offers.filter(offer => requestArr.indexOf(offer.request_id) !== -1) : null
  
  
  const offersToShow = currentUser ? offers.filter(offer => currentUser.id === offer.user_id) : offers


  return (
    <>
      <Container 
        component="main"
        maxWidth="md" 
      >
        {offersToShow.length > 0 
          ? <Box
          mt={4}>
            <Typography variant="h5" align="center">
              These are the neighbours you've offered to help:
            </Typography>
          </Box> 
          : null 
        }
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
                href="/requests"
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
