import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar.js";
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Grid>
      <NavBar />
      <About />
      <Footer />
    </Grid>
  );
}

export default App;
