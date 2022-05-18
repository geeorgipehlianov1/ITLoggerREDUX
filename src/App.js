import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechsListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <>
        <Searchbar store={store} />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechsListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
};

export default App;
