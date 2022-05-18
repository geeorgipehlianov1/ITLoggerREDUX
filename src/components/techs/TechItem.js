import React from 'react'

const TechItem = ({tech}) => {
  return (
    <li className='collection-item'>
        <div>
            {tech.firstName} {tech.lastName}
            <a href="!#" className='secondary-content'> 
                <div className="i material-icons grey-text">delete</div>
            </a>
        </div>
    </li>
  )
}

export default TechItem;