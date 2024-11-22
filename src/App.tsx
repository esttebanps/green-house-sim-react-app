
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import PlantName from './components/PlantName';
import PlantType from './components/PlantType';
import Page from './components/Page';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<Page />}>
          <Route index element={<PlantName />} />
          <Route path="name" element={<PlantName />} />
          <Route path="type" element={<PlantType />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
