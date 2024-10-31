"use client"
import React, { useState } from 'react';
import {
  Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, Link
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

const LoginPage = () => {
  const router = useRouter();
  const [notification, setNotification] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });

  const onSubmit = async (values: any) => {
    // Simulate a login API call and token generation
    const simulatedToken = {
      email: "onlineattendance@gmail.com",
      password: "password"
    };

    console.log("values :: ", values)
    // Store the token in a cookie
    setCookie('token', simulatedToken, {
      maxAge: values.remember ? 30 * 24 * 60 * 60 : undefined, // 30 days if 'remember me' is checked
      secure: true
    });

    // Redirect to a protected route
    if (values.email === "onlineattendance@gmail.com" && values.password === "password") {
      router.push('/admin/dashboard');
      setNotification(true)
    }
    const getAuth = JSON.parse(getCookie("token") as string)

  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {notification && 
        <Snackbar
          open={notification}
          autoHideDuration={5000}
          message="successfully logedIn"
        />
      }
      <Grid
        item
        xs={12} sm={8} md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form style={{ width: '100%', marginTop: 1 }}>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/path-to-your-image.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default LoginPage;
