import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerPage from "./views/manager/ManagerPage";
import SignInPage from "./views/login/signin";
import CreatePage from "./views/login/create";
import HomePage from './views/HomePage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/manager" element={<ManagerPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
