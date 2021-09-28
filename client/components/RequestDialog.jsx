import React, { useState, useRef, useEffect } from 'react'
import { postOfferThunk } from '../actions/offers'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function RequestDialog (props) {
  const { 
    currentUser, 
    request, 
    open, 
    handleDialogClose, 
    handleSubmitOpen 
  } = props

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      scroll="paper"
      maxWidth="sm"
      fullWidth={true}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{`${request.title}`}</DialogTitle>
      <DialogContent dividers={true}>
          <Typography component="h6" variant="body1" >
            Description
          </Typography>
          <Typography variant="body2" gutterBottom >
            {`${request.details}`}
          </Typography>
          <Typography component="h6" variant="body1">
            Timeframe
          </Typography>
          <Typography variant="body2" gutterBottom >
            {`${request.time_frame}`}
          </Typography>
          <Stack direction="row" spacing={1} mt={1.25}>
            <Chip
            label={request.category} 
            variant="outlined" 
            />
            <Chip 
              label={request.suburb_name} 
              variant="outlined" 
            />
          </Stack>
        //display all offers on request//
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Back</Button>
        { currentUser.id !== request.user_id && <Button onClick={handleSubmitOpen}>Offer to help</Button>}
      </DialogActions>
    </Dialog>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(RequestDialog)