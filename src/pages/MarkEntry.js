import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Button, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';

function MarkEntry() {
  const [step, setStep] = useState(1);

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 1:
        return (
          <Stack direction="column" alignItems="start" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('inEntry')} checked={values.inEntry} />}
              label="inEntry"
            />
            <FormControlLabel
              control={<Checkbox {...getFieldProps('outEntry')} checked={values.outEntry} />}
              label="outEntry"
            />
            <FormControlLabel
              control={<Checkbox {...getFieldProps('toHome')} checked={values.toHome} />}
              label="toHome"
            />
            <FormControlLabel
              control={<Checkbox {...getFieldProps('fromHome')} checked={values.fromHome} />}
              label="fromHome"
            />
          </Stack>
        );
      case 2:
        return (
          <Stack direction="column" alignItems="start" justifyContent="space-between" sx={{ my: 2 }} spacing={3}>
            <TextField
              fullWidth
              autoComplete="whereTo"
              label="Where you Go?"
              {...getFieldProps('whereTo')}
              error={Boolean(touched.whereTo && errors.whereTo)}
              helperText={touched.whereTo && errors.whereTo}
            />
          </Stack>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const LoginSchema = Yup.object().shape({
    whereTo: Yup.string().required('required....'),
  });

  const formik = useFormik({
    initialValues: {
      whereTo: '',
      inEntry: false,
      outEntry: true,
      toHome: false,
      fromHome: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (data) => {
      console.log('EntryData..', data);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

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
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              {renderForm(step)}
              {step === 1 && (
                <LoadingButton variant="contained" onClick={handleNext}>
                  Next
                </LoadingButton>
              )}
              {step === 2 && (
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </LoadingButton>
              )}
            </Form>
          </FormikProvider>
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
