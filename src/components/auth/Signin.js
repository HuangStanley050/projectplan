import React, { Component } from "react";
import * as actions from "../../store/actions/authActions";
import { connect } from "react-redux";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
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
        this.props.onLogin(this.state.email, this.state.password);
    }
    render() {
        let loginError = null;
        if (this.props.error) {
            loginError = <h1>{this.props.error}</h1>;
        }
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    
                    <h4 className="grey-text">Sign In</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input onChange={this.inputHandler} id="email" type="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input onChange={this.inputHandler} id="password" type="password"/>
                    </div>
                    <div className="input-field">
                     <button className="btn waves-effect waves-light grey z-depth-0">Login</button>
                     <h4 className="red-text center">{loginError}</h4>
                    </div>
                </form>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.login(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
