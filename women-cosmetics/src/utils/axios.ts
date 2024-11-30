import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-woman-secrets.spider-te8.com/api', 
 
});

export default instance;  