import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { styleReset, Window } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  
`;
export default function Root() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <NavBar />
        <Window style={{ margin: "5rem 2rem", position: "fixed", width: "50vw" }}>
          <Outlet />
        </Window>
      </ThemeProvider>
    </>
  );
}
