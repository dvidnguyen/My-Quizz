import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.date ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response ? error.response : Promise.reject(error);
  });
  export default instance;