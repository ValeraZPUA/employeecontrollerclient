import React, { Component } from 'react';
import styles from './ModalWindowAddEmployee.module.sass';
import Modal from 'react-modal';
import TextFiled from '../../components/TextField/TextFiled'


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

class ModalWindowAddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            fullName: '',
            gender: '',
            phoneNumber: '',
            salary: '',
            position: ''
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

    addFullName = (e) => {
        this.setState({
            fullName: e.target.value
        })
    };

    addGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    };

    addPhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    };

    addSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    };

    addPosition = (e) => {
        this.setState({
            position: e.target.value
        })
    };

    render() {
        return (
            <div className={styles.container}>
                <button onClick={this.openModal}>Add employee</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <h2 ref={subtitle => this.subtitle = subtitle}>New Employee</h2>
                    <div className={styles.modal_container}>
                        <div className={styles.textField}>
                            <TextFiled name="Full name"
                                       type="text"
                                       value={this.state.fullName}
                                       onChange={this.addFullName}/>
                            <TextFiled name="Gender"
                                       type="text"
                                       value={this.state.gender}
                                       onChange={this.addGender}/>
                            <TextFiled name="Phone number"
                                       type="text"
                                       value={this.state.phoneNumber}
                                       onChange={this.addPhoneNumber}/>
                            <TextFiled name="Salary"
                                       type="text"
                                       value={this.state.salary}
                                       onChange={this.addSalary}/>
                            <TextFiled name="Position"
                                       type="text"
                                       value={this.state.position}
                                       onChange={this.addPosition}/>
                        </div>

                        <div className={styles.btns}>
                            <div onClick={this.closeModal}>
                                <button onClick={() => this.props.myHandler(this.state.fullName,
                                        this.state.gender,
                                        this.state.phoneNumber,
                                        this.state.salary,
                                        this.state.position)}>OK</button>
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

export default ModalWindowAddEmployee;
