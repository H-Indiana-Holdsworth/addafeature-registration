import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getUser } from './services/users';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';

function App() {
  const [currentUser, setcurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <Auth /> */}
          </Route>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
