import React, { useState } from 'react'
import { connect } from 'react-redux'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props
//   return <IconButton {...other} />
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

function OfferDialog (props) {
  const { 
    request, 
    offer,
    open, 
    handleDialogClose, 
    handleRetractOpen,
    currentUser
  } = props
  
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  

  // const grammar = requestOffers?.length > 1 ? 'offers' : 'offer'

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