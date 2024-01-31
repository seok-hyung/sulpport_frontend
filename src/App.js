import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blessing from './pages/Blessing';
import Qna1 from './pages/qna/Qna1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blessing" element={<Blessing />} />
      <Route path="/qna1" element={<Qna1 />} />
    </Routes>
  );
}
export default App;
