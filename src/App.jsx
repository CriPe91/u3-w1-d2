import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />,
      <Welcome />,
      <AllTheBooks />
      <MyFooter />,
    </>
  );
}

export default App;
