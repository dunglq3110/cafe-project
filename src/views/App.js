import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerPage from "./manager/ManagerPage";
import SignInPage from "./login/signin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/manager" element={<ManagerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
