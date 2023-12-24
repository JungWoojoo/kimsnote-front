import Default from "../Components/Default/Default";
import SamplePage from "../Components/General/SamplePage";
import UsersEditContain from "../Components/Profile/Users/UsersEdit";

export const routes = [
    //dashboard
    { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },

    //sample
    { path: `${process.env.PUBLIC_URL}/general/sample_page`, Component: <SamplePage /> },
    { path: `${process.env.PUBLIC_URL}/https://support.pixelstrap.com/`},

    //profile
    { path: `${process.env.PUBLIC_URL}/profile/userEdit`, Component: <UsersEditContain /> },

];
