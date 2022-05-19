import React from 'react'
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/TechActions';
import M from "materialize-css/dist/js/materialize.min.js";



const TechItem = ({tech, deleteTech}) => {

    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({html: `Technitian removed ${tech.firstName} ${tech.lastName}`})
    }

  return (
    <li className='collection-item'>
        <div>
            {tech.firstName} {tech.lastName}
            <a href="!#" onClick={onDelete} className='secondary-content'> 
                <div className="i material-icons grey-text">delete</div>
            </a>
        </div>
    </li>
  )
}

export default connect(null, {deleteTech})(TechItem);