import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.baseURL,
});

console.log(process.env.baseURL);

export default instance;
