
import { useState } from "react";

function App() {

  let [values, setValues] = useState(new Array(6).fill(null))

  let last = values.indexOf(null)

  let next = (e) => {
    let regex = /\d/
    if (regex.test(e.target.value)) {
      let copy = values.slice()
      copy[last] = e.target.value
      setValues(copy)
    }
    else {
      e.target.value = ""
    }
  }

  let back = (e) => {
    if (e.code === "Backspace") {
      let copy = values.slice()
      if (last === -1) {
        copy[5] = null
      }
      else {
        copy[last - 1] = null
      }
      setValues(copy)
    }
  }

  let value = (i) => i === last ? <input type="text" onKeyDown={back} autoFocus onChange={next} maxLength="1" />
  : last === -1 && i === 5 ? <input type="text" onKeyDown={back} autoFocus onChange={next} maxLength="1" />
    : <div className="fixed">{values[i]}</div>

  return (
    <div className="App">
      <h1>Enter code:</h1>
      <div className="values">
        <div className="group">
          {value(0)}
          {value(1)}
          {value(2)}
        </div>
        <div className="dash"></div>
        <div className="group">
          {value(3)}
          {value(4)}
          {value(5)}
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
