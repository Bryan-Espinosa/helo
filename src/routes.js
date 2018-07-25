import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Post from "./component/Post/Post";
import Form from "./component/Form/Form";
import Auth from "./component/Auth/Auth";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
