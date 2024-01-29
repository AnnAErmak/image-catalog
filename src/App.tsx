import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './pages/Catalog/Catalog'
import Favorites from './pages/Favorites/Favorites'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'



function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index  element={<Catalog/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
