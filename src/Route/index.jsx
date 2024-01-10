import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Loader from "../Layout/Loader";
import {authRoutes} from "./AuthRoutes";
import LayoutRoutes from "../Route/LayoutRoutes";
import Login from "../Auth/Login";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    console.log(abortController)
    return () => {
      abortController.abort();
    };
  }, []);

  console.log(authenticated)

  return (
    <BrowserRouter basename={"/"}>
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<PrivateRoute />}>
              {currentUser !== null || authenticated ? (
                <>
                  <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                  <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                </>
               ) : (
                 ""
               )}
              <Route path={`/*`} element={<LayoutRoutes />} />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
            {authRoutes.map(({ path, Component }, i) => (
              <Route path={path} element={Component} key={i} />
            ))}
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
};

export default Routers;
