import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import loginStore from "../Store/login/Login";

const PrivateRoute = () => {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("member")) ? JSON.parse(localStorage.getItem("member")) : false);
  const [authenticated, setAuthenticated] = useState(false);
  const {isLogin} = loginStore()

  useEffect(() => {
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    localStorage.setItem("authenticated", authenticated);
    setLogin(JSON.parse(localStorage.getItem("member")));
  }, [setLogin]);

  return isLogin !== false || authenticated !== false ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />;
};

export default PrivateRoute;
