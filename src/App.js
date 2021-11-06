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
import OurTeam from "./Components/OurTeam/OurTeam";
import OurPortfolio from "./Components/OurPortfolio/OurPortfolio";
import AllServiceList from "./Components/DashBoard/AllServiceList/AllServiceList";
import AddService from "./Components/DashBoard/AddService/AddService";
import AddAdmin from "./Components/DashBoard/AddAdmin/AddAdmin";

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
            <PrivateRoute path="/order/:title">
            <Order></Order>
            </PrivateRoute>

            <Route path="/portfolio">
              <OurPortfolio></OurPortfolio>
            </Route>

            <Route path="/team">
              <OurTeam></OurTeam>
            </Route>

            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/list">
              <ServiceList></ServiceList>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            {/* admin */}
            <Route path="/allServiceList">
              <AllServiceList></AllServiceList>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
              <AddAdmin></AddAdmin>
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
