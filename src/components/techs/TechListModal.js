import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/TechActions";
import TechItem from "./TechItem";

const TechsListModal = ({getTechs, tech: {techs, loading}}) => {

    useEffect(() => {
    getTechs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technitian List</h4>
        <ul className="collection">
            {!loading && techs !== null && techs.map(tech => <TechItem key={tech.id} tech={tech}/> )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    tech: state.tech,
    
}) 

export default connect(mapStateToProps, { getTechs })(TechsListModal);
