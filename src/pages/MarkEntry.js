import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography } from '@mui/material';

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
