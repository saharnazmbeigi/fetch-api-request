import "./App.css";
import Gauges from "./components/gauges/gauges";
import Sensor from "./components/sensors/sensor";
import SwitchesOn from "./components/buttons/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is a test for API gauges</h1>
        <SwitchesOn />
        <Gauges />
        <Sensor />
      </header>
    </div>
  );
}

export default App;
