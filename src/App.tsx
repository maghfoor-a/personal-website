import AppHeader from "./components/AppHeader";
import CreativeCoding from "./components/CreativeCoding";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppHeader />}></Route>
      <Route path="creative" element={<CreativeCoding />}></Route>
    </Routes>
  );
}

export default App;
