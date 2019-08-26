import React from "react"
import "materialize-css/dist/js/materialize.js"
import "materialize-css/dist/css/materialize.css"

import Navbar from "../components/Navbar"
import Calculator from "../components/Calculator"

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
