import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { convert } from "../../helpers/convertTime";
import { compose } from "redux";

const ProjectDetails = (props) => {

    //insert props.project? to check if the property are valid at the stage of fetching
    const NotReady = <h1 className="loading">Loading....</h1>;

    if (props.project) {
        return (
            <div className="container sction project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                 <span className="card-title">Project Title - {props.project.title}</span>
                 <p>
                  {props.project.content}
                 </p>
                </div>
                <div className="card-action grey lighten-3 black-text">
                 <div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div>
                 <div>Posted on {convert(props.project.createdAt.seconds)}</div>
                </div>
            </div>
        </div>
        )
    }

    else {
        return NotReady;
    }
};

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    //again checking to see the the data is available 
    const project = projects ? projects[id] : null;
    return {
        project: project
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
