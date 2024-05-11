import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/customers";
class CustomerService {

    getListCustomer() {
        return axios.get(`${API_URL}`, { headers: authHeader() })
            .then(response => {
                if (response.data.result) {
                    return response.data.result;
                } else {
                    throw new Error('No data found');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                throw error;
            });
    }

    getCustomerById(id) {
        return axios.get(`${API_URL}/${id}`, { headers: authHeader() })
            .then(response => {
                if (response.data.result) {
                    return response.data.result;
                } else {
                    throw new Error('No data found');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                throw error;
            });
    }
    addCustomer(customer) {
        return axios.post(`${API_URL}`, customer, { headers: authHeader() })
            .then(response => {
                if (response.data.code === 0) {
                    return response.data.result;
                } else {
                    throw new Error('Failed to add staff');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                throw error;
            });
    }
}

export default new CustomerService();