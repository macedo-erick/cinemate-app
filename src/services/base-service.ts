import axios from 'axios';

const BaseService = (resource: string) => {
  return axios.create({
    baseURL: `http://localhost:8080/api/v1/${resource}`,
  });
};

export default BaseService;
