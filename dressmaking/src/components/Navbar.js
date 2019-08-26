import React from "react"

export default class Navbar extends React.Component {
  render = () => {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <span className="brand-logo center">
              <a href="https://github.com/szewczykmira/dressmaking-calculator">
                Dress design calculator
              </a>
            </span>
          </div>
        </nav>
      </header>
    )
  }
}
