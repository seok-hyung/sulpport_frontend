import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blessing from './pages/Blessing';
import BlessingQna from './pages/qna/BlessingQna';
import BlessingQnaResult from './pages/qna/BlessingQnaResult';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blessing" element={<Blessing />} />
      <Route path="/blessingQna" element={<BlessingQna />} />
      <Route path="/blessingQnaResult" element={<BlessingQnaResult />} />
    </Routes>
  );
}
export default App;
