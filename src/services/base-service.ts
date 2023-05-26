import axios from 'axios';

const BaseService = (resource: string) => {
  const instance = axios.create({
    baseURL: `http://localhost:8080/${resource}`,
  });

  return {
    instance,
  };
};

export default BaseService;
