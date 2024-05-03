import { ProjectBasic, Test } from "./Components";
import "./App.css";
import AirBnbClone from "./Components/AirBnbClone";

function App() {
  return (
    <>
      <h1 style={{color:'gray'}}>Vite + React + Typescript</h1>
      <Test />
      <ProjectBasic/>
      <AirBnbClone/>
    </>
  );
}

export default App;
