import React, { useState } from 'react'
import { connect } from 'react-redux'

import OfferDialog from './OfferDialog'
import RetractOfferDialog from './RetractOfferDialog'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

function OfferCard ({ offer, requests, currentUser }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openRetract, setOpenRetract] = useState(false);
  
  
  const handleDialogOpen = () => {
    setOpenDialog(true)
    setOpenRetract(false)
  }
  
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleRetractOpen = () => {
    setOpenRetract(true)
    setOpenDialog(false)
  }

  const handleRetractClose = () => {
    setOpenRetract(false);
  };

  const request = requests.find(request => request.id === offer.request_id)

  return (
    <>
      <Grid item>
        <Card
          variant="outlined"
          onClick={handleDialogOpen}
        >
          <CardHeader
            action={ offer.accepted &&
              <IconButton aria-label="offers available">
                <CircleNotificationsIcon color="success" />
              </IconButton>
            }
            title={`${request.title}`}
          />
          <CardContent>
            <Typography>
              {`You've offered āwhina to ${request.user_id} with ${request.details}`}
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
      { openDialog && <OfferDialog
        open={openDialog}
        offer={offer}
        request={request}
        handleDialogClose={handleDialogClose}
        handleRetractOpen={handleRetractOpen} 
      />}
      { openRetract && <RetractOfferDialog
        open={openRetract}
        offer={offer}
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
    // offers: globalState.offers,
    requests: globalState.requests
  }
}

export default connect(mapState2Props)(OfferCard)