import Sub from "./Sub";
import './App.css'

const App = () => {
  const someTxt = "Testing 'no-trailing-spaces' rule.";

  return (
    <div>
      <h1>Custom App</h1>

      <button>{someTxt}</button>

      <Sub txt="quotes" />
    </div>
  );
};

export default App;
