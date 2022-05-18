import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <Searchbar />
      <div className="container">
      <AddBtn />
      <AddLogModal />
      <Logs />
      </div>
    </>
  );
};

export default App;
