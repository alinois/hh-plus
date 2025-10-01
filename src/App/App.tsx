import './App.css';
import Header from './Header/Header';
import AboutMe from './Page/AboutMe/AboutMe';
import NotFound from './Page/NotFound/NotFound';
import OpenVacancy from './Page/OpenVacancy/OpenVacancy';
import Vacancy from './Page/Vacancy/Vacancy';
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<><Header /><Vacancy /></>}/>
    <Route path="vacancy/:id"element={<><Header /><OpenVacancy /></>}/>
    <Route path="me"element={<><Header /><AboutMe /></>}/>
    <Route path="*"element={<><Header /><NotFound /></>}/>
  </Routes>
</BrowserRouter>

  );
}

export default App
