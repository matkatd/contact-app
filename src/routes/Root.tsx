import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { styleReset, Window, WindowHeader, WindowContent } from "react95";
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
        <Window style={{ margin: "5rem 2rem", position: "fixed", width: "80%", maxWidth: "900px" }}>
          <WindowHeader>Contact App</WindowHeader>
          <WindowContent>
            <Outlet />
          </WindowContent>
        </Window>
      </ThemeProvider>
    </>
  );
}
