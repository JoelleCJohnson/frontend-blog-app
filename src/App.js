import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AddPost from './pages/AddPost';
import CardContainer from './components/CardContainer';
import './App.css';

export default function App() {
  const [data, setData] = useState([])

  return (
    <>
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<CardContainer data ={data} setData={setData} />} />
          <Route path="/post" element={<AddPost setData={setData} />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

