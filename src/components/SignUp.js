import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  axios.defaults.baseURL = process.env.REACT_APP_API;
  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  async function postUser(e) {
    e.preventDefault();
    try {
      const user = await axios({
        method: "post",
        url: "/signup",
        data: {
          firstName: firstName,
          lastName: secondName,
          email: email,
          password: password,
        },
      });
      localStorage.setItem("token", user.data.token);
      setSuccess(true);
    } catch (err) {
      setError(err);
      setOpen(true);
    }
  }

  if (success) {
    return <Redirect to="/todo-hooks" />;
  }
  if (redirectToSignIn) {
    return <Redirect to="/auth" />;
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        setError(error.response.data.error || error.response.data.errors);
        setOpen(true);
      }
      return Promise.reject(error);
    }
  );
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={(e) => postUser(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => handleInputChange(e, setFirstName)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => handleInputChange(e, setSecondName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleInputChange(e, setEmail)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handleInputChange(e, setPassword)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={() => setRedirectToSignIn(true)}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
