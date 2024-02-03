import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blessing from './pages/Blessing';
import BlessingQna from './pages/qna/BlessingQna';
import BlessingQnaResult from './pages/qna/BlessingQnaResult';
import MoneyPresent from './pages/MoneyPresent';
import MoneyQna from './pages/qna/MoneyQna';
import PresentQna from './pages/qna/PresentQna';
import MoneyQnaResult from './pages/qna/MoneyQnaResult';
import Knowledge from './pages/Knowledge';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blessing" element={<Blessing />} />
      <Route path="/blessingQna" element={<BlessingQna />} />
      <Route path="/blessingQnaResult" element={<BlessingQnaResult />} />
      <Route path="/moneyPresent" element={<MoneyPresent />} />
      <Route path="/moneyQna" element={<MoneyQna />} />
      <Route path="/moneyQnaResult" element={<MoneyQnaResult />} />
      <Route path="/presentQna" element={<PresentQna />} />
      <Route path="/knowledge" element={<Knowledge />} />
    </Routes>
  );
}
export default App;
