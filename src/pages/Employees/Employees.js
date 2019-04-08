import React, { Component } from 'react';
import './Employess.sass';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import EmployeeItem from '../../components/EmployeeItem/EmployeeItem'
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
        console.log('param', field, value, id);
        const index = this.state.employees.findIndex(empl => empl._id ===id);
        this.setState({
            employees: update(this.state.employees, {[index]: {[field]: {$set: [value]}}})
        })




        //const index = this.state.employees.findIndex(function(x) { return x._id==id });

        console.log(index);
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

                {/*<button onClick={this.click}>btn</button>*/}
            </div>
        )
    }

    // click = () => {
    //     this.setState({
    //         employees: update(this.state.employees, {0: {salary: {$set: 'updated field name'}}})
    //     })
    //   //   this.state.employees[0].salary ++;
    //   //   this.forceUpdate()
    // };

    componentDidMount() {
        this.setState({isFetching: true});
            //if (this.state.employees.length !== 0) {
        /*
        TODO plus
         */
                axios.post('http://localhost:3010/api/employee/step', {step: "plus"})
                    .then(({data}) => {
                        this.setState({isFetching: false, employees: data})
                    })
                    .catch((error) => {
                        this.setState({isFetching: false, error});
                    });
            //}

    }
}

export default Employees;
