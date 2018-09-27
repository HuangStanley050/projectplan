import React, { Component } from "react";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";

class DashBoard extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col s-12 m-6"> {/* project list container*/}
                        <ProjectList/>
                    </div>
                    <div classname="col s-12 m-5 offset-m1"> {/*notification container */}
                        <Notifications/>
                    </div>
                 </div>
               </div>
        );
    }

}

export default DashBoard;
