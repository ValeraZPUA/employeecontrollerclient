import React, { Component } from 'react';
import styles from './EmployeeItem.module.sass';
import axios from 'axios';
import ModalWindowEdit from "../ModalWindowEdit/ModalWindowEdit";
import ModalWindowDelete from "../ModalWindowDelete/ModalWindowDelete";

class EmployeeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            fieldNameForEdit: '',
            valueForEdit: '',
            id: '',
            phoneNumber: this.props.phoneNumber,
            salary: this.props.salary,
            position: this.props.position,
            addDate: this.props.addDate
        };
    }

    delData = (field, value, id) => {
      // this.setState({
      //     fieldNameForEdit: field,
      //     valueForEdit: '',
      //     id: id
      // });

        this.update(field, value, id);
    };

    update = (field, value, id) => {
        console.log(field, value, id);
        const newData = {[field]:value};
        axios.put('http://localhost:3010/api/employee/' + id, newData)
            .then(({data}) => {
                this.setState({
                    [field]: value
                });
            })
            .catch((error) => {
                /*
                TODO
                 */
                console.log(error);
            });
    };

    render() {
        return (
            <div className={styles.main}>
                <div  className={styles.container}>
                    <div className={styles.fullName}>
                        <span>Name: {this.props.fullName}</span>
                        <span>Gender: {this.props.gender}</span>
                    </div>

                    <div className={styles.information}>
                        <span>Phone Number: {this.state.phoneNumber}</span>
                        <span>Salary: {this.state.salary}</span>
                        <span>Position: {this.state.position}</span>
                        <span>Added: {this.state.addDate}</span>
                    </div>

                    <div className={styles.imgBtns}>
                        <div className={styles.editBtns}>
                            <ModalWindowEdit myHandler={this.update}
                                             fieldNameForEdit="phoneNumber"
                                             valueForEdit={this.state.phoneNumber}
                                             id={this.props.id}/>
                            <ModalWindowEdit myHandler={this.update}
                                             fieldNameForEdit="salary"
                                             valueForEdit={this.state.salary}
                                             id={this.props.id}/>
                            <ModalWindowEdit myHandler={this.update}
                                             fieldNameForEdit="position"
                                             valueForEdit={this.state.position}
                                             id={this.props.id}/>
                            <ModalWindowEdit myHandler={this.update}
                                             fieldNameForEdit="addDate"
                                             valueForEdit={this.state.addDate}
                                             id={this.props.id}/>
                        </div>

                        <div className={styles.deleteBtns}>
                            <ModalWindowDelete myHandler={this.update}
                                               fieldNameForEdit="phoneNumber"
                                               id={this.props.id}/>
                            <ModalWindowDelete myHandler={this.update}
                                               fieldNameForEdit="salary"
                                               id={this.props.id}/>
                            <ModalWindowDelete myHandler={this.update}
                                               fieldNameForEdit="position"
                                               id={this.props.id}/>
                            <ModalWindowDelete myHandler={this.update}
                                               fieldNameForEdit="addDate"
                                               id={this.props.id}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EmployeeItem;
