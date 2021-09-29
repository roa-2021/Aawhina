import React, { useState } from 'react'
import { postOfferThunk } from '../actions/offers'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField';

function MakeOfferDialog (props) {
  const { 
    dispatch, 
    request, 
    currentUser, 
    open,
    handleSubmitClose, 
    handleDialogOpen 
  } = props

  const [notes, setNotes] = useState('')

  const handleSubmit = () => {
    const newOffer = {
      request_id: request.id,
      user_id: currentUser.id,
      notes
    }
    dispatch(postOfferThunk(newOffer))
    handleSubmitClose()
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
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{`Enter your details`}</DialogTitle>
      <DialogContent dividers={true}>
        <TextField 
          sx={{ 
            mt: 1, 
            width: '100%'
          }} 
          multiline 
          rows={4} 
          id="outlined-basic" 
          label="Information to be sent to requester" 
          variant="outlined"
          name="notes"
          value={notes}
          onChange={handleNotesChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogOpen}>Back</Button>
        <Button onClick={handleSubmit}>Submit Offer</Button>
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