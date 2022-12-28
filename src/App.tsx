import AppHeader from "./components/AppHeader";
import CreativeCoding from "./components/CreativeCoding";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBody />}></Route>
        <Route path="creative" element={<CreativeCoding />}></Route>
      </Routes>
    </>
  );
}

export default App;
