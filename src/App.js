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
import PresentQnaResult from './pages/qna/PresentQnaResult';
import Definition from './pages/chalye/Definition';
import FoodPosition from './pages/chalye/FoodPosition';
import Sequence from './pages/chalye/Sequence';
import Yut from './pages/play/Yut';
import Kite from './pages/play/Kite';
import Jegichagi from './pages/play/Jegichagi';
import Tuho from './pages/play/Tuho';
import Tteokguk from './pages/food/Tteokguk';
import Mandu from './pages/food/Mandu';
import Jeon from './pages/food/Jeon';

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
      <Route path="/presentQnaResult" element={<PresentQnaResult />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/chalye/1" element={<Definition />} />
      <Route path="/chalye/2" element={<FoodPosition />} />
      <Route path="/chalye/3" element={<Sequence />} />

      <Route path="/play/1" element={<Yut />} />
      <Route path="/play/2" element={<Kite />} />
      <Route path="/play/3" element={<Jegichagi />} />
      <Route path="/play/4" element={<Tuho />} />

      <Route path="/food/1" element={<Tteokguk />} />
      <Route path="/food/2" element={<Mandu />} />
      <Route path="/food/3" element={<Jeon />} />
    </Routes>
  );
}
export default App;
