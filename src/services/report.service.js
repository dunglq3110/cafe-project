import axios from "axios";
import authHeader from "./authHeader";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:8080/report";

class ReportService {

    getReportByDate(date) {
        return axios.get(`${API_URL}/report-date/${date}`, { headers: authHeader() })
            .then(response => {
                if (response.data.result) {
                    return response.data.result;
                } else {
                    return response.data.message;
                }
            });
    }

}

export default new ReportService();