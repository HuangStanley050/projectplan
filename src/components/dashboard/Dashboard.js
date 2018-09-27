import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";

class DashBoard extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col s12 m6"> {/* project list container*/}
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-m1"> {/*notification container */}
                        <Notifications/>
                    </div>
                 </div>
               </div>
        );
    }

}

export default DashBoard;
