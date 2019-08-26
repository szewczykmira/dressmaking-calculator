import React from "react"

let InputRow = ({ title, shortcut }) => {
  return (
    <tr>
      <td>{shortcut}</td>
      <td>{title}</td>
      <td>
        <input id="{shortcut}" type="number"></input>
      </td>
    </tr>
  )
}

export default class InputTable extends React.Component {
  render = () => {
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
            <InputRow title="obwód piersi" shortcut="opx" />
            <InputRow title="obwód pod biustem" shortcut="opp" />
            <InputRow title="obwód talii" shortcut="ot" />
            <InputRow title="obwód bioder" shortcut="ob" />
            <InputRow title="długość przodu do piersi" shortcut="SySvX" />
            <InputRow title="długość przodu do talii" shortcut="SySvXTp" />
            <InputRow title="długość pleców" shortcut="SyTy" />
            <InputRow title="wzrost" shortcut="ZWo" />
            <InputRow title="wysokość talii" shortcut="ZTv" />
            <InputRow title="wysokość kolan" shortcut="ZKo" />
            <InputRow title="wysokość ramienia z tabelii" shortcut="SvRv" />
            <InputRow title="długość ręki" shortcut="RvNv" />
            <InputRow title="obwód ramienia" shortcut="or" />
            <InputRow title="obwód nadgarstka" shortcut="on" />
            <InputRow title="obniżenie paszki" shortcut="dk" />
            <InputRow title="tył" shortcut="luz1" />
            <InputRow title="pacha" shortcut="luz2" />
            <InputRow title="przód" shortcut="luz3" />
            <InputRow title="biodra" shortcut="luz4" />
            <InputRow title="talia" shortcut="luz5" />
        </tbody>
      </table>
    )
  }
}
