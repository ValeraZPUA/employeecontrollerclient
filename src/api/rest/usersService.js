import {restURL} from '../baseURL'
import axios from 'axios'


export const getAllUsers = (formData) => axios.post(restURL + '/employee/step', formData);

export const login = (formData) => axios.post(restURL + '/login', formData);
