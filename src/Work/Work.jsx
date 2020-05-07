import React from 'react';
import Project from '../Project/Project';

// styles
import './Work.scss'

const projects = [
    "PROJECT ONE",
    "PROJECT TWO",
    "PROJECT THREE"
]

const Work = () => {
  return (
    <div id={'work'}>

        <div className={'placeholder-block'}></div>

        {/* loop over projects */}
        { projects.map( (project, index) => {
            return <Project title={project} index={index} key={index}/>
        })

        }

    </div>
  );
}

export default Work;
