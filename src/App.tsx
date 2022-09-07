import Sub from "./Sub";
import "./app.css";
import pic from "./pic.png";
import { ReactComponent as SvgFile } from "./svg.svg";

const App = () => {
  const someTxt = "Testing 'no-trailing-spaces' rule.";

  return (
    <div className="main">
      <h1>Custom App</h1>

      <button>{someTxt}</button>

      <img src={pic} alt="pic" />

      <SvgFile />

      <Sub txt="quotes" />
    </div>
  );
};

export default App;
