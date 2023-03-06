import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Button, Grid, Box, Stack, Typography, Card } from '@mui/material';
import Iconify from '../components/iconify';

function Profile() {
  const navigate = useNavigate();
  const pathu = '/assets/images/divu.jpg';

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
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:edit-outline" />}
            onClick={() => navigate('/dashboard/account')}
          >
            Update
          </Button>
        </Stack>
        <Grid container sx={{ marginTop: '5rem' }} spacing={3}>
          divyesh
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
