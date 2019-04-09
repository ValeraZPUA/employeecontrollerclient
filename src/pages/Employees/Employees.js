import React, { Component } from 'react';
import './Employess.sass';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import EmployeeItem from '../../components/EmployeeItem/EmployeeItem'
import Button from '../../components/Button/Button'
import ModalWindowAddEmployee from '../../components/ModalWindowAddEmployee/ModalWindowAddEmployee'
import update from 'immutability-helper';


class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            error: null,
            employees: []
        }
    }

    renderLoader() {
        return (
            <PacmanLoader
                sizeUnit={"px"}
                size={36}
                color={'#123abc'}
                loading={this.state.isFetching}
            />
        )
    }

    handler = (field, value, id) => {
        const index = this.state.employees.findIndex(empl => empl._id ===id);
        this.setState({
            employees: update(this.state.employees, {[index]: {[field]: {$set: [value]}}})
        })
    };

    renderEmployees() {
       return this.state.employees.map((em) =>
           <EmployeeItem key={em._id}
                         id={em._id}
                         fullName={em.fullName}
                         gender={em.gender}
                         phoneNumber={em.phoneNumber}
                         salary={em.salary}
                         position={em.position}
                         addDate={em.addDate}
                         myHandler={this.handler}/>
       );
    }

    render() {
        return (
            <div className="Employees-container">
                {this.state.isFetching ?
                    this.renderLoader()
                    :
                    this.renderEmployees()}
                <div className="btns">
                    <Button name="previous"
                            onClick={this.componentDidMount}/>
                    <Button name="next"
                            onClick={this.componentDidMount}/>
                </div>
                <div className="btns">
                    <ModalWindowAddEmployee myHandler={this.addEmployee}/>
                </div>
            </div>
        )
    }

    addEmployee = (fullName, gender, phoneNumber, salary, position) => {
        const data = {fullName: fullName,
            gender: gender,
            phoneNumber: phoneNumber,
            salary: salary,
            position: position};
        axios.post('http://localhost:3010/api/employee/', data)
            .then(({data}) => {
                const newElement = {_id: data._id,
                    fullName: data.fullName,
                    gender: data.gender,
                    phoneNumber: data.phoneNumber,
                    salary: data.salary,
                    position: data.position,
                    addDate: data.addDate};
                if (this.state.employees.length<2) {
                    this.setState(prevState => ({
                        employees: [...prevState.employees, newElement]
                    }))
                }
            })
            .catch((error) => {
                this.setState({isFetching: false, error});
            });
    };

    componentDidMount = (step) => {
        this.setState({isFetching: true});
            axios.post('http://localhost:3010/api/employee/step', {step: step})
                .then(({data}) => {
                    this.setState({isFetching: false, employees: data})
                })
                .catch((error) => {
                    this.setState({isFetching: false, error});
                });
    }
}

export default Employees;
