import React from "react"

import Navbar from "../components/Navbar"
import Calculator from "../components/Calculator"

if (typeof(window) !== `undefined` ) {
  require("materialize-css/dist/js/materialize.js")
  require("materialize-css/dist/css/materialize.css")
}

export default class MainPage extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Calculator></Calculator>
        </main>
      </React.Fragment>
    )
  }
}
