import React from "react";
import AppNavBar from "./partials/AppNavbar";
import AppHeader from "./partials/AppHeader";
import ReadMeGrid from "./components/ReadMeGrid";
import ReadMeList from "./ReadMeList";
import Constant from "./Constants";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{Constant.APP_NAME}</title>
      </Helmet>
      <AppNavBar />
      <AppHeader />
      <ReadMeGrid readmelist={ReadMeList}></ReadMeGrid>
    </>
  );
}
