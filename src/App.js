import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Routing
import PrivateRoute from "./components/routing/PrivateRoute";

//Screens
import {
  PrivatePage,
  Login,
  Register,
  ForgotPassword,
  PasswordReset,
} from "./components/Pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivatePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/" component={HomeScreen} />
          <PrivateRoute exact path="/browse" component={PrivateScreen} /> */}
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={PasswordReset}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
