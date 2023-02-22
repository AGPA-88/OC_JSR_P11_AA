import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Error404 from "../Pages/Error404Page.jsx";
import Home from "../Pages/Homepage.jsx";
import About from "../Pages/AboutPage.jsx";


function CustomRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default CustomRoutes;