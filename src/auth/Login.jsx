import React, { useEffect, useState } from "react";
import { Container, Typography, Alert, Button, TextField } from "@mui/material";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const user = useStore((state) => state.user);
  const naviagate = useNavigate();

  useEffect(() => {
    if (user) {
      naviagate("/cities");
    }
  }, [user]);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please provide both email and password");
      return;
    }

    const success = useStore.getState().login(email, password);

    if (!success) {
      setError("Invalid email or password");
    } else {
      setError(null);
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Login
        </Button>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)(
  ({ theme }) => `
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  padding-top: 20vh;
`
);
export default LoginForm;
