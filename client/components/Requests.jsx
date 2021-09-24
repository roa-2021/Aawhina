import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent } from '@mui/material'
import React, { useState, useEffect } from 'react'

import requests from '../../request.json'

export default function Requests (props) {
  return (
    <>
      <Container 
        component="main"
        maxWidth="md" 
      >
        <Box
          mt={4}
          mb={2}
        >
          <Typography variant="h5" align="center">
            These neighbours of yours have requested help:
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            aligncards="stretch"
            rowSpacing={2} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            { requests.map(request => {
              return (
                <Grid item key={request.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">
                        {`${request.title}`}
                      </Typography>
                      <Typography >
                        {`User ${request.user_id} would like help with ${request.details}`}
                      </Typography>
                      <Chip label={request.category} variant="outlined" />
                      <Chip label={request.suburb_name} variant="outlined" />
                    </CardContent>
                  </Card>
                </Grid>)
            })}
            <Grid 
              mt={2}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button 
                variant="contained"
                size="large"
              >
                Make a request
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>)
}
