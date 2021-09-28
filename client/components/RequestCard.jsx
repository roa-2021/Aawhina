import React, { useState, useRef, useEffect } from 'react'
import { postOfferThunk } from '../actions/offers'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import RequestDialog from './RequestDialog'
import MakeOfferDialog from './MakeOfferDialog'

function RequestCard ({ dispatch, request, currentUser }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [notes, setNotes] = useState('')
  
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
    // const newOffer = {
    //   request_id: request.id,
    //   user_id: currentUser.id,
    //   notes
    // }
    // dispatch(postOfferThunk(newOffer))
    setOpenSubmit(false);
  };

  // const handleNotesChange = (e) => {
  //   e.preventDefault()
  //   setNotes(e.target.value)
  // }

  return (
    <>
      <Grid item>
        <Card
          variant="outlined"
          onClick={handleDialogOpen}
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
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(RequestCard)