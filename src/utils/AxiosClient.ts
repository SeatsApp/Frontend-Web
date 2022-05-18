import axios from "axios";
import {backendUrl} from "../config/EnvironmentConfig"

axios.defaults.withCredentials = true

const AxiosClient = axios.create({
    withCredentials: true,
    baseURL: backendUrl
})

AxiosClient.interceptors.request.use(async req => {
    const jwtToken = localStorage.getItem("JwtToken")
    if (req.headers !== undefined && jwtToken !== null) {
        req.headers.authorization = "Bearer " + jwtToken;
    }
    return req;
});

export default AxiosClient;