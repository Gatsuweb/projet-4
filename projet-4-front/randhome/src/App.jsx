import { Outlet } from "react-router-dom";
import "./style/Root.css"

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
