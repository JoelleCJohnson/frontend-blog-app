import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AddPost from './pages/AddPost';
import './App.css';

export function App() {
  const [data, setData] = useState([])

  return (
    <>
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home data={data}/>} />
          <Route path="/post" element={<AddPost setData={setData()} />} />
        </Routes>

        <Home />

        <Footer />

      </BrowserRouter>
    </>
  );
}
export default App;
