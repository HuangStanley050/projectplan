import React from "react";

const ProjectSummary = (props) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content gray-text text-darken-2">
                <span className="card-title">{props.title}</span>
                <p>Posted by Stanley</p>
                <p className="black-text">Date: September 29th</p>
            </div>
        </div>
    );

};

export default ProjectSummary;
