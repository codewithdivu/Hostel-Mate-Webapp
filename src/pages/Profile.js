import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Button, Grid, Stack, Typography } from '@mui/material';
import Iconify from '../components/iconify';

function Profile() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Profile </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Profile
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:edit-outline" />}>
            Update
          </Button>
        </Stack>
        <Grid container sx={{ marginTop: '5rem' }} spacing={3}>
          Profile PAGE
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
