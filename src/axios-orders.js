import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-3c607.firebaseio.com/'
});

export default instance;
