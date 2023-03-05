import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Button, Grid, Box, Stack, Typography } from '@mui/material';
import Iconify from '../components/iconify';

function AccountGeneral() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Account </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Account
          </Typography>
        </Stack>
        <Grid container sx={{ marginTop: '5rem' }} spacing={3}>
          ACCOUNT PAGE
        </Grid>
      </Container>
    </>
  );
}

export default AccountGeneral;
