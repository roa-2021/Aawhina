import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

function OfferDialog (props) {
  const { 
    request, 
    offer,
    open, 
    handleDialogClose, 
    handleRetractOpen,
    currentUser
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
          <Typography component="h6" variant="body1">
            Your comment:
          </Typography>
          <Typography variant="body2" gutterBottom >
            {`${offer.notes}`}
          </Typography>
      </DialogContent>
      <DialogActions>
        { offer.user_id === currentUser.id && <Button onClick={handleRetractOpen}>Retract offer</Button>}
        <Button onClick={handleDialogClose}>Back</Button>
      </DialogActions>
    </Dialog>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(OfferDialog)