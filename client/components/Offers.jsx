import React from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Stack from'@mui/material/Stack'

import { connect } from 'react-redux'
import OfferCard from './OfferCard';
import LaunchData from './LaunchData'



function Offers ({ currentUser, offers }) {

  const offersToShow = currentUser ? offers.filter(offer => currentUser.id === offer.user_id) : offers
  let languageMore = offersToShow.length >= 1 ? 'more ' : ''

  return (
    <>
    <LaunchData />
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
            { offersToShow?.map(offer => <OfferCard offer={offer} key={offer.id} />)}
            <Grid 
              item
              my={2}
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
                {`Explore ${languageMore}requests for help`}
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
    users: globalState.users,
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(Offers)
