import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar.js";
import About from './components/About';

function App() {
  return (
    <Grid>
      <NavBar />
      <About />
    </Grid>
  );
}

export default App;
