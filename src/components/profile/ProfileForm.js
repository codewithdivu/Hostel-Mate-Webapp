import * as Yup from 'yup';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { FormProvider, RHFTextField, RHFUploadAvatar } from '../hook-form';
import { fData } from '../../utils/formatNumber';
import useAuth from '../../hooks/useAuth';

function ProfileForm() {
  const { user } = useAuth();

  console.log('user', user);

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email(),
    password: Yup.string(),
    room_no: Yup.number().required('room no is required'),
    enrollment_no: Yup.number().required('enrollment no is required'),
    floor: Yup.string().required('floor is required'),
    phoneNo: Yup.number().required('phone number is required'),
    role: Yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (formData) => {
    console.log('formdata', formData);
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="photoURL"
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="name" label="Name" />
              <RHFTextField disabled name="email" label="Email Address" />
              <RHFTextField disabled name="password" label="Password" />
              <RHFTextField name="room_no" label="Room No" />
              <RHFTextField name="enrollment_no" label="Enrollment Number" />
              <RHFTextField name="floor" label="Floor" />
              <RHFTextField name="phoneNo" label="Phone Number" />
              <RHFTextField disabled name="role" label="Role" />
            </Box>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Update
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default ProfileForm;
