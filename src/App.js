import React from "react";
import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import Nav from './navbar/Nav';
import Main from './Main'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Main />
    </>
  );
}

export default App;
