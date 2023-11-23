import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Basket from './components/Basket';
import ProductDetails from './components/ProductDetail';



function App() {


  return (
    <>


      <Router>
        <Header />
        <Routes>
          
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" component={ProductDetails} />

        </Routes>
      </Router>




    </>
  )
}

export default App
