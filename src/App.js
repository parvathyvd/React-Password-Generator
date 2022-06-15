import { useRef, useState } from "react";
import "./App.css";
import Util from "./Util";

function App() {
  const [pwdLength, setPwdLength] = useState("");
  const [pwdMain, setPwdMain] = useState("");
  const upperRef = useRef();
  const lowerRef = useRef();
  const numRef = useRef();
  const symbolRef = useRef();

  const generatePassword = () => {
    Util(upperRef, lowerRef, numRef, symbolRef, pwdLength, setPwdMain);
  };
  const copyToClipboard = () => {
    if (!pwdMain) return;
    navigator.clipboard.writeText(pwdMain);
    alert("Password is copied");
  };
  return (
    <div className="password-wrapper">
      <h1>Password Generator</h1>
      <span className="small">minimum-6 maximum-30</span>
      <div className="pw-field">
        <div className="pwd">{pwdMain}</div>
        <button className="copy" onClick={copyToClipboard}>
          copy
        </button>
      </div>

      <div className="pwd-body">
        <div className="form-control">
          <label htmlFor="pwd-length">Password Length</label>
          <input
            className="pwd-length"
            type="number"
            name="pwd-length"
            min="6"
            max="30"
            value={pwdLength}
            onChange={(e) => setPwdLength(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="pwd-upper">Uppercase Letters</label>
          <input
            id="pwd-upper"
            name="pwd-upper"
            type="checkbox"
            ref={upperRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="pwd-lower">Small Letters</label>
          <input
            id="pwd-lower"
            name="pwd-lower"
            type="checkbox"
            ref={lowerRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="pwd-numbers">Numbers</label>
          <input
            id="pwd-numbers"
            name="pwd-numbers"
            type="checkbox"
            ref={numRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="pwd-symbol">Symbol</label>
          <input
            id="pwd-symbol"
            name="pwd-symbol"
            type="checkbox"
            ref={symbolRef}
          />
        </div>
      </div>
      <button className="generate" onClick={generatePassword}>
        Generate
      </button>
    </div>
  );
}

export default App;
