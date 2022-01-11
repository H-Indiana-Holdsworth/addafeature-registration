import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getUser, logout } from './services/users';
import Auth from './Views/Auth';

function App() {
  const [currentUser, setcurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setcurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>Logged in</h1>
                <button onClick={logoutUser}>Logout</button>
              </>
            )}
            {!currentUser && <Auth setcurrentUser={setcurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
