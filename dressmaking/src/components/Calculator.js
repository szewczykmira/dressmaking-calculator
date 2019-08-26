import React from "react"
import "./InputTable"
import InputTable from "./InputTable"
import OutputTable from "./OutputTable"

export default class Calculator extends React.Component {
  state = {}
  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <InputTable />
          </div>
          <div className="col s6">
            <OutputTable />
          </div>
        </div>
      </div>
    )
  }
}
