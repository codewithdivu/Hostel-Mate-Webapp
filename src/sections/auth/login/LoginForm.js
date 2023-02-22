import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { axiosPost } from '../../../axios/config';
import { apiRoutes } from '../../../axios/apiRoutes';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------
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

export default function LoginForm() {
  const [role, setRole] = useState(9);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (loginData) => {
      try {
        const response = await axiosPost(
          role === 1 ? apiRoutes.AUTH.ADMIN_LOGIN : apiRoutes.AUTH.USER_LOGIN,
          loginData
        );
        if (response.status) {
          const obj = {
            token: response.data.token,
            user: response.data.user,
          };
          console.log('auth..', obj);
          localStorage.setItem('auth', obj);
          navigate('/dashboard', { replace: true });
        }
      } catch (error) {
        console.log('error', error);
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          <Link variant="subtitle2" component={RouterLink} to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
