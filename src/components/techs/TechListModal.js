import React from "react";
import { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechsListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs")
    const data = await res.json();
    setTechs(data);
    setLoading(false);
    console.log(loading);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technitian List</h4>
        <ul className="collection">
            {!loading && techs.map(tech => <TechItem key={tech.id} tech={tech}/> )}
        </ul>
      </div>
    </div>
  );
};

export default TechsListModal;
