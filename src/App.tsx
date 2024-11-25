
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import PlantName from './components/PlantName';
import PlantType from './components/PlantType';
import Page from './components/Page';
import Header from './components/Header';
import Plant from './components/Plant';
import succulent from './assets/succulent.svg';
import cactus from './assets/cactus.svg';
import bonsai from './assets/bonsai.svg';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<Page />}>
          <Route index element={<PlantName />} />
          <Route path="name" element={<PlantName />} />
          <Route path="type" element={<PlantType />} >
            <Route path="succulent" element={<Plant plantType={succulent} />} />
            <Route path="cactus" element={<Plant plantType={cactus} />} />
            <Route path="bonsai" element={<Plant plantType={bonsai} />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
