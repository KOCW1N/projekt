import "./App.css";
import Panel from "./panel-boczny";
import Srodek from "./srodek";
import Prawo from "./prawo";

function App() {
  return (
    <div className="app">
    {
      <Panel/>
    }
    {
      <Srodek/>
    }
    {
      <Prawo/>
    }
    </div>
  );
}

export default App;
