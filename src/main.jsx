import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Header from './Layout/Header/header.jsx'
import Footer from './Layout/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header></Header>
    <App />
    <Footer></Footer>
  </BrowserRouter>,
)
