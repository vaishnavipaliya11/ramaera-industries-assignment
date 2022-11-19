import './App.css';
import { Home } from './components/productsDetail/Home';
import { ProjectInfoPage } from './components/projectsInfo/ProjectInfo';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectInfoPage/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
