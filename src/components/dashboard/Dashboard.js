import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

class DashBoard extends Component {
    render() {
        const { data, auth, notifications } = this.props;

        //console.log(data);
        if (!this.props.auth) {
            return <Redirect to="/signin"/>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6"> {/* project list container*/}
                        <ProjectList data={data}/>
                    </div>
                    <div className="col s12 m5 offset-m1"> {/*notification container */}
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    //console.log(state.firestore);
    return {
        data: state.firestore.ordered.projects,
        auth: state.auth.userID,
        notifications: state.firestore.ordered.notifications
    };
};

export default compose(firestoreConnect([{ collection: "projects" }, { collection: 'notifications', limit: 4 }]), connect(mapStateToProps))(DashBoard);
