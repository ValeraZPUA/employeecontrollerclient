import React, { Component } from 'react';
import styles from './EmployeeItem.module.sass';
import Modal from 'react-modal';
import axios from "axios";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class EmployeeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            fieldNameForEdit: '',
            valueForEdit: '',
            id: '',
            data: {}
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


    takeData = (field, value, id) => {
        this.setState({
            fieldNameForEdit: field,
            valueForEdit: value,
            id: id,
        });
        this.openModal();
    };

    update = () => {
        const data = {[this.state.fieldNameForEdit]:this.state.valueForEdit};
        axios.put('http://localhost:3010/api/employee/' + this.state.id, data)
            .then(({data}) => {
                /*
                TODO
                 */
                //this.props.myHandler(data);
                console.log(data);
            })
            .catch((error) => {
                /*
                TODO
                 */
                console.log(error);
            });

        this.closeModal();
    };


    inputHandler = (e) => {
      this.setState({
          valueForEdit: e.target.value
      })
    };

    render() {
        return (
            <div>
                <div  className={styles.container}>
                    <div className={styles.fullName}>
                        <span>Name: {this.props.fullName}</span>
                        <span>Gender: {this.props.gender}</span>
                    </div>

                    <div className={styles.information}>
                        <span>Phone Number: {this.props.phoneNumber}</span>
                        <span>Salary: {this.props.salary}</span>
                        <span>Position: {this.props.position}</span>
                        <span>Added: {this.props.addDate}</span>
                    </div>

                    <div className={styles.btns}>
                        <div onClick={() => this.takeData('phoneNumber', this.props.phoneNumber, this.props.id)}></div>
                        <div onClick={() => this.takeData('salary', this.props.salary, this.props.id)}></div>
                        <div onClick={() => this.takeData('position', this.props.position, this.props.id)}></div>
                        <div onClick={() => this.takeData('addDate', this.props.addDate, this.props.id)}></div>
                    </div>
                </div>

                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">

                        <h2 ref={subtitle => this.subtitle = subtitle}>Edit</h2>
                        <div className={styles.editFiled}>
                            <span>{this.state.fieldNameForEdit}: </span>
                            <input onChange={this.inputHandler} defaultValue={this.state.valueForEdit}/>
                        </div>

                        <div onClick={() => this.props.myHandler(this.state.fieldNameForEdit, this.state.valueForEdit, this.state.id)}>
                        {/*<div>*/}
                            <button onClick={this.update}>OK</button>
                            <button onClick={this.closeModal}>Cancel</button>
                        </div>
                    </Modal>
                </div>
            </div>



        )
    }
}

export default EmployeeItem;
