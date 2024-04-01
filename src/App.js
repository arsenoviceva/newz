import { Route, Routes } from 'react-router';
import './App.scss';
import { LandingPage } from './pages/landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;