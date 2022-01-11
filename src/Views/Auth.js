import React from 'react';
import { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import { signInUser, signUpUser } from '../services/users';
import classNames from 'classnames';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [type, setType] = useState('Sign In');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let resp = await signInUser(email, password);
      type === 'Sign In' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
    } catch (e) {
      setErrorMessage('Something went wrong, please, please try again.');
    }
  };

  return (
    <div className="links">
      <h3
        onClick={() => {
          setType('Sign In');
        }}
        className={classNames({ active: type === 'Sign In' })}
      ></h3>

      <h3
        onClick={() => {
          setType('Sign Up');
        }}
        className={classNames({ active: type === 'Sign Up' })}
      ></h3>
      <p>Type: {type}</p>
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
    </div>
  );
}
