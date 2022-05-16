//jshint esversion:6
import Layout2 from "../src/pages/Layout2/Layout2";
import Login from "../src/component/Login";
import SignUp from "../src/component/SignUp";
import ForgotPassword from "../src/component/ForgotPassword";
import Statistics from "../src/component/stats";
import Predictor from "../src/component/Predictor";
import Resourceshare from "../src/component/Resourceshare";
import Dashboard from "./component/Dashboard";

const routes = [
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/ForgotPassword", component: ForgotPassword },
  { path: "/Predictor", component: Predictor },
  { path: "/Header", component: Predictor },
  { path: "/Map", component: Predictor },
  { path: "/resourceshare", component: Resourceshare },
  { path: "/stats", component: Statistics },
  { path: "/", component: Layout2 }, 
  { path: "/Dashboard", component: Dashboard}
];

export default routes;
