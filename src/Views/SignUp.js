import React from 'react';
import { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import { signUpUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUpUser(email, password);
    } catch (e) {
      setErrorMessage('Sign up failed');
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
