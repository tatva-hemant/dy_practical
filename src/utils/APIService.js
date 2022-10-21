import axios from "axios";
import { API_URL } from "../constants/api";

axios.defaults.baseURL = API_URL;
const APIService = (function() {
    function get({ url }) {
        return axios.get(url)
            .then(res => res)
            .catch(err => err.response)
    }
    
    function post({ url, payload }) {
        return axios.post(url, payload)
            .then(res => res)
            .catch(err => err.response)
    }

    return {
        get: get,
        post: post
    }
})();

export default APIService;