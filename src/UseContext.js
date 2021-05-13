import React, { useState } from "react";
import ReactDOM from "react-dom";

const { Provider, Consumer } = React.createContext(null)

export const App = () => {

  const [{ number, number2 }, setState] = useState({ number: 10, number2: 11 })
  const toggleButton = () => {
    setState(
      c => {
        return { ...c, number: c.number + 1 }
      }
    )
  }

  return <Provider value={number}>
    <div>
      <button onClick={toggleButton} >ChangeNumber</button>
      <div>{number}</div>
      <div>{number2}</div>
      <Consumer>
        {(value) => <><h2>{value}</h2>
          <h2>{value}</h2></>}
      </Consumer>
    </div>
  </Provider>
}

ReactDOM.render(<App />, document.querySelector("#root"));

