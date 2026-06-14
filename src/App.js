import './App.css';
import HomePage from './components/home/home';
import BestSellers from './components/BestSellers/BestSellers';
import TokyoExclusive from './components/TokyoExclusive/TokyoExclusive';
import CollectionSplit from './components/Collectionsplit/Collectionsplit';
import OurModels from './components/Ourmodels/OurModels';
import ExceptionalKnowHow from './components/Exceptionalknowhow/Exceptionalknowhow';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Login from './components/login/login';
import Register from './components/register/register';
import Checkout from './components/card/card';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <HomePage />
          <BestSellers />
          <TokyoExclusive />
          <CollectionSplit />
          <OurModels />
          <ExceptionalKnowHow />
          <Footer />
        </>
      } />
      <Route path="/product/:productId" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
