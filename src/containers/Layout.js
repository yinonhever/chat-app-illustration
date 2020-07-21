import React from "react";
import Mockup from "../components/Mockup";
import Intro from "../components/Intro";
import Pattern from "../components/Pattern";

const Layout = () => (
  <main className="layout">
    <Mockup />
    <Intro />
    <Pattern left />
    <Pattern right grey /> 
  </main>
)

export default Layout;
