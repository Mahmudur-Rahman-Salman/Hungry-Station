import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
}

export default App;
