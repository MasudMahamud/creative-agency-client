import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react'
import Home from "./Components/Home/Home/Home";
import LogIn from "./Components/LogIn/LogIn/LogIn";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";

import Order from "./Components/Order/Order";

import ServiceList from "./Components/ServiceList/ServiceList";
import Review from "./Components/Review/Review";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/login">
              <LogIn></LogIn>
            </PrivateRoute>

            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/list">
              <ServiceList></ServiceList>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>

            <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
