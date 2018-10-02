import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions";

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        // console.log(this.state);
    }
    submitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h4 className="grey-text">Create Project</h4>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <br/>
                        <input onChange={this.inputHandler} id="title" type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <br/>
                        <textarea onChange={this.inputHandler} id="content" className="materialize-textarea"/>
                    </div>
                    <div className="input-field">
                        <button className="btn grey z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(actions.createProject(project))
    };
};

export default connect(null, mapDispatchToProps)(CreateProject);
