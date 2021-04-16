import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);
  const jwt = require("jsonwebtoken");
  axios.defaults.baseURL = process.env.REACT_APP_API;
  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      const payload = jwt.verify(token, process.env.REACT_APP_SECRET);
      if (payload) setRedirect(true);
    } catch (error) {
      return <Redirect to="/auth" />;
    }
  }, []);

  async function loginUser(e) {
    e.preventDefault();
    try {
      const user = await axios({
        method: "post",
        url: "/login",
        data: {
          email: email,
          password: password,
        },
      });

      localStorage.setItem("token", user.data.token);
      setRedirect(true);
    } catch (err) {}
  }
  if (redirect) {
    return <Redirect to="/todo-hooks" />;
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

  if (redirect) {
    return <Redirect to="/todo-hooks" />;
  }
  if (redirectToSignUp) {
    return <Redirect to="/signup" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => loginUser(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handleInputChange(e, setPassword)}
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
          <Grid container>
            <Grid item>
              <Button onClick={() => setRedirectToSignUp(true)}>
                {"Sign Up"}
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
