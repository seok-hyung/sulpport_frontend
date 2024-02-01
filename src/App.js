import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blessing from './pages/Blessing';
import Qna from './pages/qna/Qna';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blessing" element={<Blessing />} />
      <Route path="/qna" element={<Qna />} />
    </Routes>
  );
}
export default App;
