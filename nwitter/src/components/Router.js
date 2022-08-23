import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";


const AppRouter = ({ isLogIn }) => {
  return (
    <Router>
      <switch>
        {isLogIn ? (
          <>
            <Route>
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
      )}
      </switch>
    </Router>
  );
};

export default AppRouter;