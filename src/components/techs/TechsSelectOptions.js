import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/TechActions';

const TechsSelectOptions = ({getTechs, tech: {techs, loading}}) => {
    useEffect(() => {
        getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
     !loading && techs !== null && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>)
  )
}

const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs }) (TechsSelectOptions);
