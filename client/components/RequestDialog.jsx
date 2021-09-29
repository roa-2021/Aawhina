import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateOfferThunk } from '../actions/offers'

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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RequestDialog (props) {
  const { 
    dispatch,
    currentUser, 
    request, 
    open, 
    handleDialogClose, 
    handleSubmitOpen,
    requestOffers,
    handleRetractOpen
  } = props
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAccept = (offerToUpdate) => {
    newOffer = {
      ...offerToUpdate,
      accepted: true
    }
    dispatch(updateOfferThunk(newOffer))
  }

  const grammar = requestOffers?.length > 1 ? 'offers' : 'offer'

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
          <Typography variant="body2" gutterBottom sx={{ mb: 1 }}>
            {`${request.time_frame}`}
          </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Chip
            label={request.category}
            variant="outlined"
          />
          <Chip
            label={request.suburb_name}
            variant="outlined"
            sx={{ mr: "auto" }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        { currentUser.id === request.user_id && requestOffers.length > 0 && <>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          <Typography onClick={handleExpandClick} sx={{ flexGrow: 2}} >
            {`Click to see ${requestOffers.length} ${grammar}`}
          </Typography>
        </>}
        { currentUser.id !== request.user_id && <Button onClick={handleSubmitOpen}>Offer to help</Button>}
        { currentUser.id === request.user_id && <Button 
        variant="outlined" 
        onClick={handleRetractOpen}>
          Remove Request
      </Button>}

                 <Button onClick={handleDialogClose}>Back</Button>

      </DialogActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <DialogContent>
          <Stack divider={<Divider flexItem />} >
          { requestOffers?.map(offer => {
            return (
            <Card key={offer.id} elevation={0}>
              <CardContent>
                {`Your neighbour, ${offer.first_name}, has offered āwhina. They left you this note: ${offer.notes}`}
              </CardContent>
              <CardActions sx={{display: "flex", flexDirection: "row" }}>
                <Button 
                  variant="outlined" 
                  sx={{alignItems:"flex-end"}}
                  onClick={() => handleAccept(offer)}
                >
                    Accept Offer
                </Button>
               
              </CardActions>
            </Card>)
          })}
          </Stack>
        </DialogContent>
      </Collapse>
    </Dialog>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(RequestDialog)
