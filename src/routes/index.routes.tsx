import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About";

function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<Navigate to="/" />} />
          </Routes>
     );
}

export default AppRoutes
