import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About";
import { AboutConvenios } from '../pages/docs/AboutConvenios';

function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/docs/convenio_2020" element={<AboutConvenios year={2020} />} />
               <Route path="/docs/convenio_2021" element={<AboutConvenios year={2021} />} />
               <Route path="/docs/convenio_2022" element={<AboutConvenios year={2022} />} />
               <Route path="/docs/convenio_2023" element={<AboutConvenios year={2023} />} />
               <Route path="/docs/convenio_2024" element={<AboutConvenios year={2024} />} />
               <Route path="/docs/*" element={<Navigate to="/about" />} />
               <Route path="*" element={<Navigate to="/" />} />
          </Routes>
     );
}

export default AppRoutes;