import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";


class DashBoard extends Component {
    render() {
        const { data } = this.props;
        //console.log(data);
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6"> {/* project list container*/}
                        <ProjectList data={data}/>
                    </div>
                    <div className="col s12 m5 offset-m1"> {/*notification container */}
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        data: state.project.projects
    };
};

export default connect(mapStateToProps)(DashBoard);
