import React, { Component } from 'react';
import styles from './ModalWindowRegUser.module.sass';
import Modal from 'react-modal';
import TextFiled from '../../components/TextField/TextFiled'
import Button from '../../components/Button/Button'


const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModalWindowRegUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            login:'',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
        });
    }

    addEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    addLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    };

    addPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    addConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    };

    render() {
        return (
            <div className={styles.container}>
                <Button onClick={this.openModal}
                        name="Registration"/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={subtitle => this.subtitle = subtitle}>New Employee</h2>
                    <div className={styles.modal_container}>
                        <div className={styles.textField}>
                            <TextFiled name="Email"
                                       type="text"
                                       value={this.state.email}
                                       onChange={this.addEmail}/>
                            <TextFiled name="Login"
                                       type="text"
                                       value={this.state.login}
                                       onChange={this.addLogin}/>
                            <TextFiled name="Password"
                                       type="password"
                                       value={this.state.password}
                                       onChange={this.addPassword}/>
                            <TextFiled name="Confirm password"
                                       type="password"
                                       value={this.state.confirmPassword}
                                       onChange={this.addConfirmPassword}/>
                        </div>

                        <div className={styles.btns}>
                            <div onClick={this.closeModal}>
                                <button onClick={() => this.props.myHandler(this.state.login,
                                        this.state.email,
                                        this.state.password)}>OK</button>
                            </div>
                            <div>
                                <button onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalWindowRegUser;
