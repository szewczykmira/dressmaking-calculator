import React from "react"
import "./InputTable"
import InputTable from "./InputTable"
import OutputTable from "./OutputTable"

let roundValue = value => {
  try {
    return Math.round(value * 10) / 10
  } catch (error) {
    console.log("Błąd =>", error)
    return value
  }
}

export default class Calculator extends React.Component {
  state = {
    calculated: false,
  }
  updateState = (name, value) => {
    console.log(value, typeof(value), name)
    this.setState({ [name]: parseFloat(value) })
  }

  calculateValues = () => {
    this.setState({ calculated: true })
    let {
      opx,
      opp,
      ot,
      ob,
      ZWo,
      ZTv,
      ZKo,
      SvRv,
      dk,
      luz1,
      luz2,
      luz3,
      luz4,
      luz5,
    } = this.state
    let SyP = roundValue((1 / 9) * opp + 10.8 + dk)
    let a = roundValue(opx - (8 / 7) * opp)
    let PcPl = roundValue((1 / 7) * opp - (3/2) + luz2)
    let S3R2 = roundValue(SvRv + luz1)
    let SyT = roundValue(0.25 * ZWo - 1)
    let SyS2 = roundValue((1 / 18) * opp + 2.1)
    let b = roundValue(0.25 * ob + 0.5 * luz4)
    let wb = roundValue(0.2 * (ob - ot) - 1.5)
    let z = roundValue(2 * (b - wb) - 0.5 * ot - luz5)
    let R3R4 = roundValue((1 / 18) * opp - (1 / 20) * a)
    let PlR3Helper = roundValue(2 - 0.1 * a)


    this.setState({
      SyP: SyP,
      SyŁ: roundValue(0.5 * SyP),
      SyT: SyT,
      TB: roundValue(0.1 * ZWo + 4),
      TK: ZTv - ZKo,
      TyT: 2,
      ByB: 2,
      KyK: 2,
      a: a,
      PyPc: roundValue((1 / 7) * opp + 5.5 + luz1),
      PcPl: PcPl,
      PlPx: roundValue((2 / 7) * opp - 4 + 0.5 * a + luz3),
      PyPx: roundValue((4 / 7) * opp + 0.5 * a + luz1 + luz2 + luz3),
      PcPv: roundValue((2 * PcPl) / 3),
      PxPp: roundValue((1 / 9) * opp + 0.8 + (1 / 8) * a),
      SyS2: SyS2,
      S2S3: 2,
      S1R1: 1.2,
      S3R2: S3R2,
      PlR3: `PcR1 - ${PlR3Helper}`,
      R3R4: R3R4,
      R4S7: S3R2 - 1,
      TxTa: roundValue(0.25 * a),
      TaS4: roundValue(SyT + (1 / 18) * opp + (3 / 7) * a),
      S4S6: SyS2,
      S4Sx: roundValue(SyS2 + 1.5),
      S5X: roundValue((2 / 7) * opp + 0.25 * a + 4),
      b: b,
      wb: wb,
      t: b - wb,
      z: z,
      zp: roundValue(0.4 * z),
      zt: roundValue(0.6 * z),
    })
  }

  render = () => {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <InputTable passState={this.updateState} />
          </div>
          <div className="col s12 m6">
            <button
              className="waves-effect waves-light btn"
              onClick={this.calculateValues}
            >
              Calculate!
            </button>
            <OutputTable
              currentState={this.state.calculated ? this.state : null}
            />
          </div>
        </div>
      </div>
    )
  }
}
