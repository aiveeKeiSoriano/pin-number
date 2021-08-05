import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {

  let [values, setValues] = useState(new Array(6).fill(null))

  let last = values.indexOf(null)
  let ref = useRef()

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

  return (
    <div className="App">
      <h1>Enter code:</h1>
      <div className="values">
        {values.map((el, i) => i === last ? <input type="text" onKeyDown={back} autoFocus onChange={next} maxLength="1" />
          : last === -1 && i === 5 ? <input type="text" onKeyDown={back} autoFocus onChange={next} maxLength="1" />
            : <div className="fixed">{el}</div>)}
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
