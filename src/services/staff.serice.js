import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:8080/manager/';

class StaffService {
    setStaffs() {
        return axios.get(API_URL + 'staffs', { headers: authHeader() });
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new StaffService();