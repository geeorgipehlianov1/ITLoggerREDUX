import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <Searchbar />
      <div className="container">
      <AddBtn />
      <Logs />
      </div>
    </>
  );
};

export default App;
