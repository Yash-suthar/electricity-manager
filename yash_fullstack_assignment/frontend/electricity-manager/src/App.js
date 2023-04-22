import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Bills from './component/Bills';
import Room from './component/Room';
import DataProvider from './context/data.provider';

function App() {
  
  return (
    <DataProvider>

    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/Room" element={<Room/>}></Route>
          <Route path="/Bills" element={<Bills/>}></Route>
      </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
