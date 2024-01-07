import api from "../index";

export const signIn = async (params) =>
    await api.post(`${process.env.REACT_APP_API_URL}/login`, params)
        .then((response) => {return response});

export const oauthSignIn = async (param) =>
    await api.post(`${process.env.REACT_APP_API_URL}/login/oauth2`, param)
        .then((response) => {return response});