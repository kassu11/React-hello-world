import "../scss/App.scss";
import Counter from "../components/Counter";
import Chart from "../components/Chart";

import {Route, Routes, BrowserRouter} from "react-router-dom";

function App(obj) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="React-hello-world/" element={<Counter />} />
        <Route path="React-hello-world/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;