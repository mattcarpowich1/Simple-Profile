import React from 'react';
import {
  FormControl,
  InputLabel,
  Input
} from '@material-ui/core';
import './Signup.sass';

const Signup = () => {

  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="dense">
        <InputLabel
          htmlFor="email"
          style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
          Email address
        </InputLabel>
        <Input id="email" type="email" fullWidth={true} />
      </FormControl>
      <FormControl fullWidth margin="dense">
        <InputLabel
          htmlFor="password"
          style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
          Password
        </InputLabel>
        <Input id="password" type="password" fullWidth={true} />
      </FormControl>
      <FormControl fullWidth margin="dense">
        <InputLabel
          htmlFor="passwordConfirm"
          style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
          Confirm Password
        </InputLabel>
        <Input id="passwordConfirm" type="password" fullWidth={true} />
      </FormControl>
    </form>
  );
};

export default Signup;
