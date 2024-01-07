import React, {useEffect, useState} from 'react';
import Loader from '../Layout/Loader';
import {useParams} from "react-router-dom";
import {oauthSignIn} from "../api/login/Login";
import Cookies from "js-cookie";

/**
 * 구글에서 콜백
 * @returns {Element}
 * @constructor
 */
const Callback = () => {

  const { registrationId, token}= useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(registrationId)
    console.log(token)
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
              setLoading(true)
              window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`;
            }
        })
  });

  return (
    <div>
      <Loader loading={loading} />
    </div>
  );

};

export default Callback;