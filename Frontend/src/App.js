
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import EmailVerificatie from './Pages/EmailVerificatie';
import Welcome from './Pages/Welcome';
import Account from './Pages/Account';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fashion' element={<ShopCategory banner={men_banner} category="fashion"/>}/>
        <Route path='/homestuff' element={<ShopCategory banner={women_banner} category="Homestuff"/>}/>
        <Route path='/art' element={<ShopCategory banner={kid_banner} category="art"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/emailverificatie' element={<EmailVerificatie/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
