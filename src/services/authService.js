import { API_METHOD, HEADERS } from "../utils/constants/apiConstants";

const API_URL = "https://login/";
class AuthService {
    login({ email, password }) {
        return fetch(`/login`, {
            method: API_METHOD.POST,
            headers: HEADERS,
            body: JSON.stringify({
                email, password
            })
        }).then(response => {
            if (response.ok)
                return response.json()
        }).then(res => {
            localStorage.setItem("user", email)
            return res
        })

    }

    logout() {
        localStorage.removeItem("user");
    }



    isAuthenticatedUser() {
        const isAuthenticated = localStorage.getItem('user')
        console.log(isAuthenticated, "user123")
        if (isAuthenticated !== undefined && isAuthenticated !== null) {
            return true
        }
        return false
    }
}

export default new AuthService();