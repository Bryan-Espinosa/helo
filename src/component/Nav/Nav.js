import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav() {
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
      <Link to="/new">
        <button>New Post</button>
      </Link>
    </div>
  );
}
const mapStateToProps = state => {
  return { username: state, profilepic: state };
};
export default connect(
  mapStateToProps,
  {}
)(Nav);
