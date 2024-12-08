import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/users"; // Your backend endpoint

const registerUser = (user) => axios.post(`${API_BASE_URL}/register`, user);
const loginUser = (user) => axios.post(`${API_BASE_URL}/login`, user);
const getUser = (id) => axios.get(`${API_BASE_URL}/${id}`);

const UserService = {
    registerUser,
    loginUser,
    getUser,
};

export default UserService;
