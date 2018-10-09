import React from "react";
import ProjectSummary from "./ProjectSummary";
import { convert } from "../../helpers/convertTime";
import { Link } from "react-router-dom";

//console.log(convert(1538626489));

const ProjectList = ({ data }) => { //destructure data property from props passed down

  return (
    <div className="project-list section">
          {data && data.map(project=>
          { //console.log(project.id);
            //let time = convert(project.creatAt.seconds);
            return <Link key={project.id} to={"/project/"+project.id}>
                      <ProjectSummary 
                        
                        title={project.title} 
                        authorFirstname={project.authorFirstName} 
                        authorLastname={project.authorLastName}
                        createdAt ={project.createdAt.seconds?convert(project.createdAt.seconds):null}
                      />
                    </Link>;
              
          }
          )}
        </div>
  );

};

export default ProjectList;
