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
import RetractOfferDialog from './RetractOfferDialog'

function RequestCard ({ offers, request, currentUser }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openRetract, setOpenRetract] = useState(false);
  
  
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

  const handleRetractOpen = () => {
    setOpenRetract(true)
    setOpenDialog(false)
  }

  const handleRetractClose = () => {
    setOpenRetract(false);
  };

  const requestOffers = []
  if (currentUser) {
    offers.map(offer => {
      if (offer.request_id === request.id) {
        requestOffers.push(offer)
      }
    })
  }

  return (
    <>
      <Grid item>
        <Card
          variant="outlined"
          onClick={handleDialogOpen}
        >
          <CardHeader
            action={ requestOffers.length > 0 && currentUser.id === request.user_id &&
              <IconButton aria-label="offers available">
                <CircleNotificationsIcon color="success" />
              </IconButton>
            }
            title={`${request.title}`}
          />
          <CardContent>
            <Typography>
              { request.details }
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
        handleRetractOpen={handleRetractOpen} 
        requestOffers={requestOffers}
      />}
      { openSubmit && <MakeOfferDialog
        open={openSubmit}
        request={request}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        handleSubmitClose={handleSubmitClose} 
      />}
       { openRetract && <RetractOfferDialog
        open={openRetract}
        request={request}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        handleRetractClose={handleRetractClose} 
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