import React, {useEffect} from 'react';
import Loader from '../Layout/Loader';
import {useParams} from "react-router-dom";
import {oauthSignIn} from "../api/login/Login";
import Cookies from "js-cookie";
import loginStore from "../Store/login/Login";

/**
 * 구글에서 콜백
 * @returns {Element}
 * @constructor
 */
const Callback = () => {
  const { registrationId, token}= useParams();
  const {isLogin, login} = loginStore();

  useEffect(() => {
    const param = {
      registrationId: registrationId,
      token:token
    }

    oauthSignIn(param)
        .then((r) => {
            console.log(r)
            if(r.data.status === "success"){
              Cookies.set('Authorization', r.data.data.accessToken)
              Cookies.set('refresh_token', r.data.data.refreshToken)
              login();
              window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`;
            }
        })
  },[]);

    useEffect(() => {
        console.log(isLogin)
    }, [isLogin]);

  return (
    <div>
      <Loader loading={isLogin} />
    </div>
  );

};

export default Callback;