import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerPage from "./views/manager/ManagerPage";
import SignInPage from "./views/login/signin";
import VisitPage from './views/VisitPage';
import NavBar from './views/manager/NavBar';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/manager" element={<ManagerPage />} />
                <Route path="/" element={<VisitPage />} />
            </Routes>
        </Router>
    );
}

export default App;
