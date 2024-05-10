import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ManagerPage from "./pages/manager/ManagerPage";
import SignIn from "./pages/login/SignIn";
import NavBar from './components/NavBar';
import StaffPage from './pages/staff/StaffPage'
import VisitPage from './pages/VisitPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/manager/*" element={<ManagerPage/>}/>
                <Route path="/staff" element={<StaffPage/>}/>
<<<<<<< HEAD
                <Route path="/" element={<VisitPage/>}/>
=======
                <Route path="/" element={<SignIn/>}/>
>>>>>>> 08b0a952171c18315c841fcd1e4e2cbede9e0958
                
            </Routes>
        </Router>
    );
}

export default App;
