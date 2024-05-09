export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.result.token) {
        return { Authorization: 'Bearer ' + user.result.token };
    } else {
        return {};
    }
}