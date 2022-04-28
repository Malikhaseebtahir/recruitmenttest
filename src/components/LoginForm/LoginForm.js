import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import auth from "../../services/authService";
import classes from "./LoginForm.module.css";
import Form from "./../UI/Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    isLoading: false,
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
      this.setState({ isLoading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    this.setState({ isLoading: false });
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className={classes.loginContainer}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}{" "}
          {this.state.isLoading && (
            <p className={classes.loadingLabel}>Loading....</p>
          )}
        </form>
      </div>
    );
  }
}

export default LoginForm;
