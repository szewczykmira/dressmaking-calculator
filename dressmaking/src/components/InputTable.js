import React from "react"

let InputRow = ({ passState, title, shortcut }) => {
  let handleChange = event => {
    passState(shortcut, event.target.value)
  }
  return (
    <tr>
      <td>{shortcut}</td>
      <td>{title}</td>
      <td>
        <input name="{shortcut}" onChange={handleChange}></input>
      </td>
    </tr>
  )
}

export default class InputTable extends React.Component {
  render = () => {
    let { passState } = this.props
    return (
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th>Dane do konstrukcji</th>
            <th>Obliczenia/uwagi</th>
            <th>cm</th>
          </tr>
        </thead>

        <tbody>
          <InputRow title="obwód piersi" shortcut="opx" passState={passState} />
          <InputRow
            title="obwód pod biustem"
            shortcut="opp"
            passState={passState}
          />
          <InputRow title="obwód talii" shortcut="ot" passState={passState} />
          <InputRow title="obwód bioder" shortcut="ob" passState={passState} />
          <InputRow
            title="długość przodu do piersi"
            shortcut="SySvX"
            passState={passState}
          />
          <InputRow
            title="długość przodu do talii"
            shortcut="SySvXTp"
            passState={passState}
          />
          <InputRow
            title="długość pleców"
            shortcut="SyTy"
            passState={passState}
          />
          <InputRow title="wzrost" shortcut="ZWo" passState={passState} />
          <InputRow
            title="wysokość talii"
            shortcut="ZTv"
            passState={passState}
          />
          <InputRow
            title="wysokość kolan"
            shortcut="ZKo"
            passState={passState}
          />
          <InputRow
            title="wysokość ramienia z tabelii"
            shortcut="SvRv"
            passState={passState}
          />
          <InputRow
            title="długość ręki"
            shortcut="RvNv"
            passState={passState}
          />
          <InputRow
            title="obwód ramienia"
            shortcut="or"
            passState={passState}
          />
          <InputRow
            title="obwód nadgarstka"
            shortcut="on"
            passState={passState}
          />
          <InputRow
            title="obniżenie paszki"
            shortcut="dk"
            passState={passState}
          />
          <InputRow title="tył" shortcut="luz1" passState={passState} />
          <InputRow title="pacha" shortcut="luz2" passState={passState} />
          <InputRow title="przód" shortcut="luz3" passState={passState} />
          <InputRow title="biodra" shortcut="luz4" passState={passState} />
          <InputRow title="talia" shortcut="luz5" passState={passState} />
        </tbody>
      </table>
    )
  }
}
