import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "url-back";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    // esto va a retornar la ruta para el estudiante
    getEstudianteBoard() {
        return axios.get(API_URL + 'estudiante', { headers: authHeader() })
    }

    // esto va a retornar la ruta para el tutor
    getTutorBoard() {
        return axios.get(API_URL + 'tutor', { headers: authHeader() })
    }
}

export default new UserService();