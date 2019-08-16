import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./Form";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Redux Smurf Village</h1>
        <SmurfList />
        <br/>
        <br/>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
