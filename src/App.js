import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import auth from "./services/authService";
import ProtectedRoute from "./components/UI/ProtectedRoute";
import Logout from "./components/Logout";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile/Profile";
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/Navbar/NavBar";
import Customers from "./components/customer/Customers";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(auth.getCurrentUser());
    console.log(auth.getCurrentUser());
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/customers" component={Customers} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route
            path="/customers"
            render={(props) => <Customers {...props} />}
          />
          <Route path="/profile" component={Profile} />
          <Redirect from="/" exact to="/customers" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
