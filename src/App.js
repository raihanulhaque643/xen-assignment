import React from 'react';
import { useSelector } from 'react-redux'
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './features/user/Login';
import Signup from './features/user/Signup';
import Profile from './features/user/Profile';
import { userSelector } from './features/user/userSlice'
import ProtectedRoute from './features/user/ProtectedRoute'
import NotFound from "./features/user/NotFound";

function App() {

  const user = useSelector(userSelector);

  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact component={Login} path="/" />
          <Route exact component={Signup} path="/signup" />
          <ProtectedRoute exact path='/profile' component={Profile} email={user.email} />
          <Route exact component={NotFound} path="*" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
