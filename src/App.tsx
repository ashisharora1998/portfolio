import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import SpecsList from './Pages/uses';

const App = () => {
  return (
    <div className="min-h-screen !w-full flex flex-col items-center p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/uses" element={<SpecsList />} />
      </Routes>
    </div>
  );
};

export default App;
