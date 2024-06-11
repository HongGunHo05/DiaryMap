import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<div>123</div>}></Route>
          <Route path={"/test"} element={<div>test2</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
