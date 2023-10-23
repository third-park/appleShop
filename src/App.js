import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import reset from "styled-reset";
import Nav from "./navbar/Nav";
import Main from "./Main";
import Detail from "./product/Detail";
import About from "./about/About";
import Member from "./about/member";
import Company from "./about/company";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
            <>
              <Nav />
              <Main />
            </>
          }
        />
        <Route path="/detail" element={<><Nav/><Detail /></>} />
        <Route path="/about" element={<><Nav/><About/></>}>
          <Route path="member" element={<Member />}/>
          <Route path="company" element={<Company />}/>
        </Route>
        <Route path="*" element={ <div>없는페이지</div> } />
      </Routes>
    </>
  );
}

export default App;
