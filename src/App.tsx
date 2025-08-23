import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:slug" element={<Detail />} />
    </Routes>
  );
}

export default App;
