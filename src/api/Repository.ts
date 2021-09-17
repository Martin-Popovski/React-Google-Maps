import Axios from 'axios';

const baseURL = "http://localhost:3001";

const repository = Axios.create({
    baseURL
});

export default repository;