import React, { Component } from "react";

import { connect } from "react-redux";
import { login, registerUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClickReg() {}
  handleClickLog() {}

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          onInput={e => this.setState({ username: e.target.value })}
          placeholder="username"
        />
        <input
          onInput={e => this.setState({ password: e.target.value })}
          placeholder="password"
        />
        <button onClick={this.props.login}>Login</button>
        <button onClick={this.props.registerUser}>Register</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { login, registerUser }
)(Auth);
