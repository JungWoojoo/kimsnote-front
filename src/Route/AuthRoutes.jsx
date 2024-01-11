import Callback from "../Auth/Callback";
import Join from "../Auth/Join";

export const authRoutes = [
  //join
  { path: `${process.env.PUBLIC_URL}/join`, Component: <Join /> },

  //oauth 이후 콜백
  { path: `${process.env.PUBLIC_URL}/oauth2/redirect/:registrationId/:token`, Component: <Callback /> },
];
