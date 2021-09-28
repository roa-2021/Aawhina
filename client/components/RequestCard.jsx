import React, { useState } from 'react'

import { connect } from 'react-redux'

import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RequestDialog from './RequestDialog'
import MakeOfferDialog from './MakeOfferDialog'

function RequestCard ({ dispatch, offers, currentUser, request }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  
  const handleDialogOpen = () => {
    setOpenDialog(true)
    setOpenSubmit(false)
  }
  
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmitOpen = () => {
    setOpenSubmit(true)
    setOpenDialog(false)
  }

  const handleSubmitClose = () => {
    setOpenSubmit(false);
  };

  const requestOffers = offers.filter(offer => offer.request_id === request.id)

  return (
    <>
      <Grid item>
        <Badge 
          badgeContent={requestOffers && requestOffers.length} 
          color="success"
        >
          <Card
            variant="outlined"
            onClick={handleDialogOpen}
            fullWidth={true}
          >
            <CardContent>
              <Typography variant="h6">
                {`${request.title}`}
              </Typography>
              <Typography my={0.5}>
                {`User ${request.user_id} would like help with ${request.details}`}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={request.category}
                  variant="outlined" />
                <Chip
                  label={request.suburb_name}
                  variant="outlined" />
              </Stack>
            </CardContent>
        </Card>
          </Badge>
      </Grid>
      { openDialog && <RequestDialog
        open={openDialog}
        request={request}
        handleDialogClose={handleDialogClose}
        handleSubmitOpen={handleSubmitOpen} 
      />}
      { openSubmit && <MakeOfferDialog
        open={openSubmit}
        request={request}
        handleDialogClose={handleDialogClose}
        handleSubmitClose={handleSubmitClose} 
      />}
    </>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser,
    offers: globalState.offers
  }
}

export default connect(mapState2Props)(RequestCard)