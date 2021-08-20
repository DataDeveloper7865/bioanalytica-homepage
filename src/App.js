import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar.js";
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <Grid>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Footer />
    </Grid>
  );
}

export default App;
