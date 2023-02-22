import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/iconify';
import { apiRoutes } from '../../../axios/apiRoutes';
import { axiosPost } from '../../../axios/config';

const roles = [
  {
    label: 'admin',
    value: 1,
  },
  {
    label: 'user',
    value: 9,
  },
];
const floors = [
  {
    label: 'Ground',
  },
  {
    label: 'First',
  },
  {
    label: 'Second',
  },
];

export default function RegisterForm() {
  const navigate = useNavigate();
  const [role, setRole] = useState(9);

  const [showPassword, setShowPassword] = useState(false);

  // schemas...
  const RegisterAdminSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const RegisterUserSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    floor: Yup.string().required('floor  is required'),
    room_no: Yup.number().required('room number is required'),
    enrollment_no: Yup.number().required('Enrollment number is required'),
  });

  // initialvalues...

  const adminInitialValues = {
    name: '',
    email: '',
    password: '',
  };
  const userInitialValues = {
    name: '',
    email: '',
    password: '',
    floor: '',
    room_no: '',
    enrollment_no: '',
  };

  // methods
  const formik = useFormik({
    initialValues: role === 1 ? adminInitialValues : userInitialValues,
    validationSchema: role === 1 ? RegisterAdminSchema : RegisterUserSchema,
    onSubmit: async (registerData) => {
      console.log('registerData', registerData);
      // try {
      //   const response = await axiosPost(apiRoutes.AUTH.ADMIN_REGISTER, registerData);
      //   if (response.status) {
      //     navigate('/login', { replace: true });
      //   } else {
      //     alert('there is some issues....');
      //   }
      // } catch (error) {
      //   console.log('err', error);
      // }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            placeholder="Role"
            label="Role"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            error={Boolean(touched.role && errors.role)}
            helperText={touched.role && errors.role}
          >
            {roles.map((role) => (
              <MenuItem key={role.value} selected value={role.value}>
                {role.label}
              </MenuItem>
            ))}
          </Select>

          <TextField
            fullWidth
            label="name"
            {...getFieldProps('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          {/* users.. */}

          {role === 9 && (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Floor</InputLabel>
              <Select
                placeholder="Floor"
                label="Floors"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...getFieldProps('floor')}
                error={Boolean(touched.floor && errors.floor)}
                helperText={touched.floor && errors.floor}
              >
                {floors.map((role, index) => (
                  <MenuItem key={index} selected value={role.label}>
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {role === 9 && (
            <TextField
              fullWidth
              label="room_no"
              {...getFieldProps('room_no')}
              error={Boolean(touched.room_no && errors.room_no)}
              helperText={touched.room_no && errors.room_no}
            />
          )}
          {role === 9 && (
            <TextField
              fullWidth
              label="enrollment_no"
              {...getFieldProps('enrollment_no')}
              error={Boolean(touched.enrollment_no && errors.enrollment_no)}
              helperText={touched.enrollment_no && errors.enrollment_no}
            />
          )}
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
