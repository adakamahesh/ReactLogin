import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    username:"",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginData.email === "amb@gmail.com" && loginData.password === "amb@123" ||loginData.username) {
      console.log(`emai:${loginData.email} and password:${loginData.password}`);
      navigate('/login');
    } else console.log("wrong email or password");
  }
  return (
    <>
      <Box>
        <Typography variant='h4' marginBottom="2rem">Signin Page</Typography>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
          onSubmit={handleSubmit}
        >
          <TextField
            type='username'
            label='Username'
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            required
            variant='outlined'
          />
          <TextField
            type='email'
            label='Email'
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
            variant='outlined'
          />
          <TextField
            type='password'
            label='password'
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required variant='outlined'
          />
          <Button variant='contained'
            type='submit'>submit</Button>
        </form>
      </Box>
    </>
  )
}

export default Login