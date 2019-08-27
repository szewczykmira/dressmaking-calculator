import React from "react"

let OutputRow = ({shortcut, values}) => {
    return (
        <tr>
            <td>{shortcut}</td>
            <td>{values ? values[shortcut] : null}</td>
        </tr>
    )
}

export default class OutputTable extends React.Component {
  render = () => {
      let { currentState } = this.props
    return (
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th></th>
            <th>cm</th>
          </tr>
        </thead>
        <tbody>
          <OutputRow shortcut="SyP" values={currentState} />
          <OutputRow shortcut="SyŁ" values={currentState} />
          <OutputRow shortcut="SyT" values={currentState} />
          <OutputRow shortcut="TB" values={currentState} />
          <OutputRow shortcut="TK" values={currentState} />
          <OutputRow shortcut="TyT" values={currentState} />
          <OutputRow shortcut="ByB" values={currentState} />
          <OutputRow shortcut="KyK" values={currentState} />
          <OutputRow shortcut="a" values={currentState} />
          <OutputRow shortcut="PyPc" values={currentState} />
          <OutputRow shortcut="PcPl" values={currentState} />
          <OutputRow shortcut="PlPx" values={currentState} />
          <OutputRow shortcut="PyPx" values={currentState} />
          <OutputRow shortcut="PcPv" values={currentState} />
          <OutputRow shortcut="PxPp" values={currentState} />
          <OutputRow shortcut="SyS2" values={currentState} />
          <OutputRow shortcut="S2S3" values={currentState} />
          <OutputRow shortcut="S1R1" values={currentState} />
          <OutputRow shortcut="S3R2" values={currentState} />
          <OutputRow shortcut="PlR3" values={currentState} />
          <OutputRow shortcut="R3R4" values={currentState} />
          <OutputRow shortcut="P4S7" values={currentState} />
          <OutputRow shortcut="TxTa" values={currentState} />
          <OutputRow shortcut="TaS4" values={currentState} />
          <OutputRow shortcut="S4S6" values={currentState} />
          <OutputRow shortcut="S4Sx" values={currentState} />
          <OutputRow shortcut="S5X" values={currentState} />
          <OutputRow shortcut="b" values={currentState} />
          <OutputRow shortcut="wb" values={currentState} />
          <OutputRow shortcut="t" values={currentState} />
          <OutputRow shortcut="z" values={currentState} />
          <OutputRow shortcut="zp" values={currentState} />
          <OutputRow shortcut="zt" values={currentState} />
        </tbody>
      </table>
    )
  }
}
