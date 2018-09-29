import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ data }) => { //destructure data property from props passed down
    console.log(data);
    return (
        <div className="project-list section">
          {data && data.map(project=>
          {
          return <ProjectSummary key={project.id} title={project.title}/>
              
          }
          )}
        </div>
    );

};

export default ProjectList;
