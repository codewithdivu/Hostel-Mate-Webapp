import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography } from '@mui/material';
import axios from 'axios';

function MarkEntry() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Mark Entry </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Mark Entry
          </Typography>
        </Stack>
        <Grid container sx={{ marginTop: '5rem' }} spacing={3}>
          Make Entry
        </Grid>
      </Container>
    </>
  );
}

export default MarkEntry;

// const [lat, setLat] = useState([]);
// const [long, setLong] = useState([]);

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude);
//   });
//   console.log('Latitude is:', lat);
//   console.log('Longitude is:', long);
// }, [lat, long]);
