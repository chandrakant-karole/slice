import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style/main.scss';
// import Footer from './common/Footer';
// import Header from "./common/Header";
import Home from './landing_page/Home'
import ForgetPassword from './site_authentication/ForgetPassword';
import Login from './site_authentication/Login';
import SignUp from './site_authentication/SignUp';
import DashHome from './dashboard/home/DashHome';
import Wallet from './dashboard/home/Wallet';
function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forget_password' element={<ForgetPassword />} />
          <Route path='/dashboard' element={<DashHome />} />
          <Route path='/wallet' element={<Wallet/>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
