import React, { useState } from "react";
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
import data from "./data";
import NotFound from "./NotFound";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

function App() {
  const [shoes, setshoes] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
            <>
              <Nav />
              <Main shoes={shoes}/>
            </>
          }
        />
        <Route path="/detail/:productId" element={<><Nav/><Detail shoes={shoes}/></>} />
        <Route path="/about" element={<><Nav/><About/></>}>
          <Route path="member" element={<Member />}/>
          <Route path="company" element={<Company />}/>
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
