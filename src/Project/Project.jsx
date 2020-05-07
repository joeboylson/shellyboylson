import React from 'react';

// styles
import './Project.scss'

const Project = (props) => {

  return (
    <div 
      style={{animationDelay: `${props.index / 10}s` }}  
      className={'project'}
    >

        <div className={'project-image'}>
          <img src="https://via.placeholder.com/1000x500" alt="https://via.placeholder.com/150"/>
        </div>

        <div className={'project-details'}>
            <h2>{props.title}</h2>
        </div>

    </div>
  );
}

export default Project;
