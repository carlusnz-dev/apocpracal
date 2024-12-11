import './styles/App.css'
import { HashRouter as Router } from 'react-router-dom'
import Header from './components/Navbar'
import AppRoutes from './routes/index.routes'
import Footer from './components/Footer'

function App() {
     return (
          <Router>
               <Header />
               <AppRoutes />
               <Footer />
          </Router>
     )
}

export default App
