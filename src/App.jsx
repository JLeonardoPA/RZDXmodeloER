import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Team from './components/Team';
import ERModel from './components/ERModel';
import Description from './components/Description';
import Operations from './components/Operations';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="er-model" element={<ERModel />} />
          <Route path="description" element={<Description />} />
          <Route path="operations" element={<Operations />} />
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}




