import React from 'react';

export default function AuthForm({
  email,
  password,
  setEmail,
  setPassword,
  errorMessage,
  handleSubmit,
}) {
  return (
    <div>
      <form>
        <h2>{errorMessage}</h2>
        <label>Email: </label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
