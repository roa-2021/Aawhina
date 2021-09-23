import { Container, Typography, Box, Stack, Card } from '@mui/material'
import React, { useState, useEffect } from 'react'

import Nav from './Nav'


export default function Requests (props) {
  return (
    <>
      <Nav />
      <Container 
        maxWidth="lg" 
        sx={{
          bgcolor: 'background.paper'
        }}>
        <Box>
          <Typography variant="h1">
            Hi!
          </Typography>
        </Box>
        <Box>
          <Stack >
            <Card variant="outlined">
              This is an offer!
            </Card>
          </Stack>
        </Box>
      </Container>
    </>
  )
}
