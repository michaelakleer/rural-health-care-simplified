import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
