import React, { useState } from 'react'
import { connect } from 'react-redux'

import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
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
import Collapse from '@mui/material/Collapse'
import CardActions from '@mui/material/CardActions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RequestCard ({ offers, request }) {
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



  const requestOffers = offers.filter(offer => offer.request_id === request.id)
  // const grammar = requestOffers.length > 1 ? 'offers' : 'offer'

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
            {/* <CardActions disableSpacing>
              <Typography>
                {`Click to see ${requestOffers.length} ${grammar}`}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              </CardContent>
            </Collapse> */}
        </Card>
      </Grid>
      {}
      { openSubmit && <MakeOfferDialog
        open={openSubmit}
        request={request}
        handleDialogClose={handleDialogClose}
        handleSubmitClose={handleSubmitClose} 
        requestOffers={requestOffers}
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