import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.baseURL || `http://localhost:5000/`,
});

console.log(process.env.baseURL);

export default instance;
