import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerPage from "./pages/manager/ManagerPage";
import SignIn from "./pages/login/SignIn";
import VisitPage from './pages/VisitPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/manager" element={<ManagerPage />} />
                <Route path="/" element={<VisitPage />} />
            </Routes>
        </Router>
    );
}

export default App;
