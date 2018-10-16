import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../ui/loader";
import * as actions from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

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
        if (!this.props.auth) {
            return <Redirect to="/signin"/>;
        }

        return (
            <div className="container">
                {this.props.loading?<Loader/>:null}
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
                        <button className="btn waves-effect waves-light grey z-depth-0" type="submit">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.project.loading,
        auth: state.auth.authStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(actions.createProject(project))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
