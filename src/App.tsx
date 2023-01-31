import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import MiniPromo from "./components/promo/MiniPromo";
import Services from "./components/services/Services";
import Consult from "./components/consult/Consult";
import AboutUs from "./components/aboutus/AboutUs";
import MyCabinet from "./components/mycabinet/MyCabinet";
import MyDocuments from "./components/mydocuments/MyDocuments";
import Review from "./components/review/Review";
import Scroller from "./components/scroller/Scroller";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <MiniPromo />
      <Services />
      <Consult />
      <AboutUs />
      <MyCabinet />
      <MyDocuments />
      <Review />
      <Scroller />
      <Contact />
    </div>
  );
}

export default App;
