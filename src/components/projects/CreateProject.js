import React, { Component } from "react";

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
        console.log(this.state);
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

export default CreateProject;
