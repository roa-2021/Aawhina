import React, { useState } from 'react'
import { connect } from 'react-redux'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RequestDialog from './RequestDialog'
import MakeOfferDialog from './MakeOfferDialog'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

function RequestCard ({ offers, request, currentUser }) {
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

  let requestOffers
  if (currentUser) {requestOffers = offers.filter(offer => offer.request_id === request.id)}

  return (
    <>
      <Grid item>
        <Card
          variant="outlined"
          onClick={handleDialogOpen}
        >
          <CardHeader
            action={ requestOffers &&
              <IconButton aria-label="offers available">
                <CircleNotificationsIcon color="success" />
              </IconButton>
            }
            title={`${request.title}`}
          />
          <CardContent>
            <Typography>
              {`User ${request.user_id} would like help with ${request.details}`}
            </Typography>
            <Stack direction="row" spacing={1} mt={2}>
              <Chip
                label={request.category}
                variant="outlined" 
              />
              <Chip
                label={request.suburb_name}
                variant="outlined" 
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      { openDialog && <RequestDialog
        open={openDialog}
        request={request}
        handleDialogClose={handleDialogClose}
        handleSubmitOpen={handleSubmitOpen} 
        requestOffers={requestOffers}
      />}
      { openSubmit && <MakeOfferDialog
        open={openSubmit}
        request={request}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        handleSubmitClose={handleSubmitClose} 
      />}
    </>
  )
}

function mapState2Props (globalState) {
  return {
    // currentUser: globalState.currentUser,
    offers: globalState.offers
  }
}

export default connect(mapState2Props)(RequestCard)