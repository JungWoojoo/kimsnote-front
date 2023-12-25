import api from "../index";

const apiUrl = `${process.env.REACT_APP_API_URL}/member`
const googleClientId = `${process.env.REACT_APP_GOOGLE_KEY}`

export const signIn = async (params) =>
    await api.post(`${apiUrl}/login`, params)
        .then((response) => {return response});


export const oauthSignIn = async () =>
    await api.get(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=http://localhost:48080/api/oauth2/callback/google&response_type=code&scope=profile`)
        .then((response) => {return response});