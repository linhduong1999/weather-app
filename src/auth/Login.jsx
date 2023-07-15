import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography, Alert, Button, TextField } from "@mui/material";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/cities");
    }
  }, [user, navigate]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const login = useCallback(() => {
    if (!form.email || !form.password) {
      setError("Please provide both email and password");
      return;
    }

    const success = useStore.getState().login(form.email, form.password);

    if (!success) {
      setError("Invalid email or password");
    } else {
      setError(null);
    }
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login();
    },
    [login]
  );

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)(
  () => `
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  padding-top: 20vh;
`
);
export default LoginForm;
