import axios from 'axios';
require('dotenv').config();

const baseURL = process.env.API_URL || 'http://localhost:4000';

export default axios.create({
    baseURL
});
