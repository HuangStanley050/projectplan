import React, { Component } from "react";

class DashBoard extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col sm-12 md-6"> {/* project list container*/}
                    </div>
                    <div classname="col sm-12 md-5 offset-m1"> {/*notification container */}
                    </div>
                 </div>
               </div>
        );
    }

};

export default DashBoard;
