import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Button, Grid, Box, Stack, Typography } from '@mui/material';
import Iconify from '../components/iconify';
import ProfileForm from '../components/profile/ProfileForm';

function AccountGeneral() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Account </title>
      </Helmet>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Account
          </Typography>
        </Stack>
        <Box sx={{ mb: 5 }} />
        <Box>
          <ProfileForm />
        </Box>
      </Container>
    </>
  );
}

export default AccountGeneral;
