import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Pages/Cart/Cart';
import Home from './components/Pages/Main/Home';
import Profile from './components/Pages/Profile/Profile';





function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="profile" element={<Profile/>} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
