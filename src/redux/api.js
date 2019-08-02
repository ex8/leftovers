import axios from 'axios';
require('dotenv').config();

const baseURL = (process.env.REACT_APP_NODE_ENV === 'production') ? '' : 'http://localhost:4000';

export default axios.create({
    baseURL 
});
