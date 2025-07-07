import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comp/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
