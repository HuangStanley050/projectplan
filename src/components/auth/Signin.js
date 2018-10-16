import React, { Component } from "react";
import * as actions from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
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
        //let redirect = null;
        let login = this.props.isLogin;
        if (this.props.error) {
            loginError = <h5>{this.props.error}</h5>;
        }
        if (login) {
            return <Redirect to="/"/>;
        }
        //console.log(this.props.auth);
        return (
            <div className="container">
                {/*{redirect}*/}
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
                     <div className="red-text center">{loginError}</div>
                    </div>
                </form>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isLogin: state.auth.authStatus,
        auth: state.firebase.auth.uid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.login(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
