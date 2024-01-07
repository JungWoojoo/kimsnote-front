import Callback from "../Auth/Callback";

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/oauth2/redirect/:registrationId/:token`, Component: <Callback /> },
];
