import Default from "../Components/Dashboard/Default";
import Ecommerce from "../Components/Dashboard/Ecommerce";
import SamplePage from "../Components/General/SamplePage";

export const routes = [
  //dashboard
  { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },

  //sample
  { path: `${process.env.PUBLIC_URL}/general/sample_page`, Component: <SamplePage /> },
  { path: `${process.env.PUBLIC_URL}/https://support.pixelstrap.com/`},
];
