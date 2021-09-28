import React, { useState } from 'react'
import { deleteOfferThunk } from '../actions/offers'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogContentText } from '@mui/material'

function MakeOfferDialog (props) {
  const { 
    dispatch, 
    open,
    offer,
    handleDialogOpen,
    handleRetractClose,
  } = props

  const handleSubmit = () => {
    dispatch(deleteOfferThunk(offer.id))
    handleRetractClose()
  };

  const handleNotesChange = (e) => {
    e.preventDefault()
    setNotes(e.target.value)
  }

  return (
    <Dialog
      open={open}
      onClose={handleSubmit}
      scroll="paper"
      maxWidth="sm"
      fullWidth={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
      <DialogContent >
        <DialogContentText id="alert-dialog-description">
          This action can't be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit} color="error">Confirm</Button>
        <Button onClick={handleDialogOpen}>Back</Button>
      </DialogActions>
    </Dialog>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(MakeOfferDialog)