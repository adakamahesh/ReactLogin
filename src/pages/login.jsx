import React, { useState } from "react";
// import { InputLabel } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Typography, Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigat = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "amb@gmail.com" && password === "amb@123") {
        console.log(` email: ${email} and password: ${password}`)
        navigat("/")
    } else {
      console.log("password wrong");
      
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h4" marginBottom="2rem">
          Login Page
        </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type="email"
              required
            />
            <TextField
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type="password"
              required
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
          
      </Box>
    </>
  );
};

export default Login;