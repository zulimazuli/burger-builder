import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-2020-burger-builder.firebaseio.com'
});

export default instance;