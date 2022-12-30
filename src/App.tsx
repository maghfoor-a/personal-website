import CreativeCoding from "./components/CreativeCoding";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";
import MFM from "./components/ProjectPages/MFM";
import GetStuffDone from "./components/ProjectPages/GetStuffDone";
import ZMDB from "./components/ProjectPages/ZMDB";
import AppHeaderV2 from "./components/AppHeader";

function App() {
  return (
    <>
      <AppHeaderV2 />
      <Routes>
        <Route path="/" element={<MainBody />}></Route>
        <Route path="creative" element={<CreativeCoding />}></Route>
        <Route path="/mfm" element={<MFM />}></Route>
        <Route path="/getstuffdone" element={<GetStuffDone />}></Route>
        <Route path="/zmdb" element={<ZMDB />}></Route>
      </Routes>
    </>
  );
}

export default App;
