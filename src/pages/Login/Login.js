import React, { Component } from 'react';
import './Login.sass';
import Button from '../../components/Button/Button'
import TextFiled from '../../components/TextField/TextFiled'
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.com',
            password: 'password'
        };
    }

    loginBtn = () => {
        console.log(this.state);
        const data = [{email: this.state.email}, {password: this.state.password}];
        //const data = [this.state.login, this.state.password];
        console.log(data);
        axios.post('http://localhost:3010/api/login', this.state )
            .then(({data}) => {
                /*
                TODO
                 */
                console.log(data);
            })
            .catch((error) => {
                /*
                TODO
                 */
                console.log(error);
            });
        this.props.history.push('employees/');

    };



    registnrationBtn() {

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


    onSubmit = () => {
        console.log(this.state)
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
                               type="text"
                               value={this.state.password}
                               onChange={this.changePassword}/>
                </div>
                <div className="btn">
                    <Button name="Login"
                            onClick={this.loginBtn}/>
                    <Button name="Registration"
                            myHandler={this.registnrationBtn}/>
                </div>


            </div>
        )
    }
}

export default Login;
