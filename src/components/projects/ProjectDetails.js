import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container sction project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                 <span class="card-title">Project Title - {id}</span>
                 <p>
                  Bacon ipsum dolor amet beef buffalo corned beef, frankfurter picanha swine doner bacon tri-tip. Pancetta venison t-bone, corned beef pig andouille beef fatback jerky tail chuck meatloaf pastrami buffalo shoulder. Ground round sausage bacon strip steak, swine tail andouille ribeye brisket turducken salami cupim hamburger. Shank beef ground round tail pancetta, bresaola tongue short ribs biltong ham strip steak picanha.
                 </p>
                </div>
                <div className="card-action grey lighten-3 black-text">
                 <div>Posted by Stanley</div>
                 <div>Posted on September 29th</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;
