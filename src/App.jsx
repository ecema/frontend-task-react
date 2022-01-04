import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import EventList from './EventList/EventList';
import EventDetail from './EventDetail/EventDetail';
import './App.css'

function App() {

  const [selected, setSelected] = useState({});
  const [searchKey, setSearchKey] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
        </Link>
        <div className="events">
          <Routes>
            <Route path="/" element={<EventList setSelected={setSelected} setSearchKey={setSearchKey} searchKey={searchKey} />}></Route>
            <Route path="/detail/*" element={<EventDetail selected={selected} setSearchKey={setSearchKey} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
