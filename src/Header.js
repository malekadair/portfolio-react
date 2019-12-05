import React from "react";
import headshot from "./assets/headshot.jpeg";

function Header() {
  return (
    <header>
      <img className="face" src={headshot} alt="My lovely headshot." />
      <section className="greeting">
        <h2>My name is</h2>
        <h1>Malek.</h1>
      </section>
      <div className="space"> </div>
    </header>
  );
}

export default Header;
