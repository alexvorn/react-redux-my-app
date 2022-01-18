import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/login';
import Image from '../../components/imageRobot';
import AuthForm from '../../components/authForm';

class Login extends Component {

    loginUser = () => {
        const user = {
            email: '',
            password: '',
        }
        user.email = this.emailInput.value;
        user.password = this.passwordInput.value;
        console.log(user)

        this.props.loginUser(user);
    }

    render() {
        return (
            <div className='login-page container'>
                <Image />
                <div>
                    <img src={require('../../images/logo.png')}/>
                    <h1>Login</h1>
                    <AuthForm />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.login
    }),
    dispatch => ({
        loginUser: user => {
            dispatch(loginAction(user))
        }
    }),
)(Login);