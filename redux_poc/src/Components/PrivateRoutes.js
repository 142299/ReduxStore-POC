import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";

const PrivateRoutes = (props) => {
  let { isAuth, component: Component } = props;
  isAuth = true;
  return (
    <div>
      <NavBar />
      <Route
        render={(props) =>
          isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )
        }
      />
    </div>
  );
};
export default PrivateRoutes;
