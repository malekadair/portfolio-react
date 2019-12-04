import React from "react";

function Header() {
  return (
    <header>
      <img
        className="face"
        src="assets/headshot.jpeg"
        alt="My lovely headshot."
      />
      <section className="greeting">
        <h2>My name is</h2>
        <h1>Malek.</h1>
      </section>
      <div className="space"> </div>
    </header>
  );
}

export default Header;
