import React from "react";
import AppNavBar from "./partials/AppNavbar";
import AppHeader from "./partials/AppHeader";
import ReadMeGrid from "./components/ReadMeGrid";
import ReadMeList from "./ReadMeList";

export default function App() {
  return (
    <>
      <AppNavBar />
      <AppHeader />
      <ReadMeGrid readmelist={ReadMeList}></ReadMeGrid>
    </>
  );
}
