import React from 'react';
import { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUser(email, password);
    } catch (e) {
      setErrorMessage('Sign in failed');
    }
  };

  return (
    <>
      <h1>Sign In</h1>
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
