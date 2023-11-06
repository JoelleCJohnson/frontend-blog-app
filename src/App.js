import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AddPost from './pages/AddPost';
import CardContainer from './components/CardContainer';
import './App.css';
import Signup from './pages/Signup';

export const UserContext = createContext()

export default function App() {
  const [blogPosts, setBlogPosts] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const userLS = localStorage.getItem('userLogin')
    if(userLS){
      setLogin(true)
    }
  },
  [])

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ blogPosts, setBlogPosts, login, setLogin }} >

        <Nav />
        <main className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<CardContainer />} />
          <Route path="/post" element={<AddPost />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </main>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter >
    </>
  );
}

