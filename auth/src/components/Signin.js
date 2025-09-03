import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va tu lógica de login
    console.log({ email, password });
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" align="center">
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end" style={{ marginTop: 8 }}>
          <Grid item>
            <Link component={RouterLink} to="/auth/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
