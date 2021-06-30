import axios from 'axios';

const instance = axios.create({
  baseURL: "https://meetup-tw.herokuapp.com/",
});

console.log(process.env.baseURL);

export default instance;
