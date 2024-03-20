import { Outlet } from "react-router-dom";
import Navbar from "./components/MenuBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
