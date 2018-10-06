import React from "react";
import ProjectSummary from "./ProjectSummary";
import { convert } from "../../helpers/convertTime";

//console.log(convert(1538626489));

const ProjectList = ({ data }) => { //destructure data property from props passed down

  return (
    <div className="project-list section">
          {data && data.map(project=>
          { //console.log(project.createdAt.seconds);
            //let time = convert(project.creatAt.seconds);
            return <ProjectSummary 
                    key={project.id} 
                    title={project.title} 
                    authorFirstname={project.authorFirstName} 
                    authorLastname={project.authorLastName}
                    createdAt ={project.createdAt.seconds?convert(project.createdAt.seconds):null}
                  />;
              
          }
          )}
        </div>
  );

};

export default ProjectList;
