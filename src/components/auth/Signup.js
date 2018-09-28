import React, { Component } from "react";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h4 className="grey-text">Sign Up</h4>
                    <div className="input-field">
                        <label for="email">Email</label>
                        <br/>
                        <input onChange={this.inputHandler} id="email" type="email" />
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <br/>
                        <input onChange={this.inputHandler} id="password" type="password"/>
                    </div>
                    <div className="input-field">
                        <label for="lastName">Last Name</label>
                        <br/>
                        <input onChange={this.inputHandler} id="lastName" type="text" />
                    </div>
                    <div className="input-field">
                        <label for="firstName">First Name</label>
                        <br/>
                        <input onChange={this.inputHandler} id="firstName" type="text" />
                    </div>
                    <div className="input-field">
                     <button className="btn grey z-depth-0">Sign Up!</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default SignUp;
