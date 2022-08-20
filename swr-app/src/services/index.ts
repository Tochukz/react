import Axios from 'axios';

//Todo: This token must be obtained from the result of a login request
const token = 'EmptyToken';

const axios = Axios.create({
  baseURL: 'http://localhost:8084',
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

export default axios;