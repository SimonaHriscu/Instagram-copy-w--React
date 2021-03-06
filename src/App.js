import React from "react";
import Data from "./data";
import "./scss/main.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main gallery={Data}></Main>
      </React.Fragment>
    );
  }
}
