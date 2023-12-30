import Callback from "../Auth/Callback";

export const authRoutes = [
  { path: `${process.env.REACT_APP_URL}/oauth2/callback/:code`, Component: <Callback /> },
];
