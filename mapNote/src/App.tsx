import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/test'} element={<div>test2</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
