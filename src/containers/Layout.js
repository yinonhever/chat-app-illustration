import React, { useEffect } from "react";
import Mockup from "../components/Mockup";
import Intro from "../components/Intro";
import Pattern from "../components/Pattern";

const Layout = () => {
  useEffect(() => {
    let delay = 0.3;
    const chatElements = document.getElementsByClassName("chat-element");
    for (let i = 0; i < chatElements.length; i++) {
      chatElements[i].style.animation = "zoomIn 0.5s ease-out " + delay + "s";
      chatElements[i].style.animationFillMode = "backwards";
      delay = delay + 0.8;
    }
  })

  return (
    <main className="layout">
      <Mockup />
      <Intro />
      <Pattern left />
      <Pattern right grey />
    </main>
  )
}

export default Layout;
