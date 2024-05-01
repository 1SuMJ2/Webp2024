import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
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
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VIQeZfDkI6AIvO6q9xArtVYPNs5tLP0-NA&usqp=CAU