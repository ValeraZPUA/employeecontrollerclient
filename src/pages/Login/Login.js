import React, { Component } from 'react';
import './Login.sass';
import Button from '../../components/Button/Button'
import TextFiled from '../../components/TextField/TextFiled'
import axios from 'axios';
import ModalWindowRegUser from '../../components/ModalWindowRegUser/ModalWindowRegUser'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.com',
            password: 'password'
        };
    }

    loginBtn = () => {
        axios.post('http://localhost:3010/api/login', this.state )
            .then(({data}) => {
                if(data)
                    this.props.history.push('employees/');
            })
            .catch((error) => {
                if(error)
                    console.log('ERROR', error)
            });

    };

    registrationBtn = (login, email, password) => {
        const newUserData = {login: login, email: email, password: password};
        axios.post('http://localhost:3010/api/user', newUserData)
            .then(({data}) => {
                if(data)
                    this.props.history.push('employees/');
            })
            .catch((error) => {
                console.log('ERROR',error);
            });
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    render() {
        return (
            <div className="Login-container">
                <div className="textField">
                    <TextFiled name="Email"
                               type="text"
                               value={this.state.email}
                               onChange={this.changeEmail}/>
                    <TextFiled name="Password"
                               type="password"
                               value={this.state.password}
                               onChange={this.changePassword}/>
                </div>
                <div className="btn">
                    <Button name="Login"
                            onClick={this.loginBtn}/>
                    <ModalWindowRegUser myHandler={this.registrationBtn}/>
                </div>
            </div>
        )
    }
}

export default Login;
