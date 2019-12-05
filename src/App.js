import React, { Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <div class="fade1"></div>
      <Main />
      <div class="fade3"></div>
      <Footer />
    </Fragment>
  );
}

export default App;
