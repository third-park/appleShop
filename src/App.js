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
import Tab from "./product/Tab";
import TabContents from "./product/TabContents";
import Cart from "./Cart/Cart";


const GlobalStyle = createGlobalStyle`
  ${reset}
`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

function App() {
  const [shoes, setShoes] = useState(data);

  const [tab, setTab] = useState(0);


  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
            <>
              <Nav />
              <Main shoes={shoes} setShoes={setShoes}/>
            </>
          }
        />

        <Route path="/detail/:productId" element={
        <>
          <Nav/>
          <Detail shoes={shoes} />
          <Tab setTab={ setTab } />
          <TabContents tab={tab} />
        </>
        } />

        <Route path="/about" element={ <><Nav/><About/></>} >
          <Route path="member" element={ <Member />} />
          <Route path="company" element={ <Company />} />
        </Route>

        <Route path="/cart" element={ <><Nav /><Cart /></> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
