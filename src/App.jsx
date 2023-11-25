import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Basket from './components/Basket';
import ProductDetails from './components/ProductDetail';
import store from './store';
import { Provider } from 'react-redux';

function App() {


  return (
    <>

      <Provider store={store}>
        <Router>
          <Header />
          <Routes>

            <Route path="/home/:id" element={<ProductDetails />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </Router>

      </Provider>




    </>
  )
}

export default App
