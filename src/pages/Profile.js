import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Button, Grid, Box, Stack, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../components/iconify';
import cssStyles2 from '../utils/cssStyles2';
import Image from '../components/image';
import MyAvatar from '../components/MyAvatar';

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    ...cssStyles2().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

function Profile() {
  const navigate = useNavigate();

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
          <Card
            sx={{
              mb: 3,
              height: 280,
              position: 'relative',
            }}
          >
            <RootStyle>
              <InfoStyle>
                <MyAvatar
                  sx={{
                    mx: 'auto',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: 'common.white',
                    width: { xs: 80, md: 128 },
                    height: { xs: 80, md: 128 },
                  }}
                />
                <Box
                  sx={{
                    ml: { md: 3 },
                    mt: { xs: 1, md: 0 },
                    color: 'common.white',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Typography variant="h4">Mavadiya Divyesh</Typography>
                  <Typography sx={{ opacity: 0.72 }}>Software Engineer</Typography>
                </Box>
              </InfoStyle>
              <Image
                alt="profile cover"
                src="/assets/images/divu.jpg"
                sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              />
            </RootStyle>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
