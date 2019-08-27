import React from "react"
import "./InputTable"
import InputTable from "./InputTable"
import OutputTable from "./OutputTable"

export default class Calculator extends React.Component {
  updateState = (name, value) => {
    this.setState({ [name]: value })
  }
  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <InputTable passState={this.updateState} />
          </div>
          <div className="col s6">
            <OutputTable />
          </div>
        </div>
      </div>
    )
  }
}
