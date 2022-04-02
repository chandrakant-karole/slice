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
import UserProfileHome from './dashboard/user_profile/UserProfileHome';
import UserEditProfile from './dashboard/user_profile/UserEditProfile';
import  ChangePwd  from './dashboard/user_profile/ChangePwd';
import UserAccountSetting from './dashboard/user_profile/UserAccountSetting';
import DisableAccount from './dashboard/user_profile/DisableAccount';
import UserAccountDetails from './dashboard/user_profile/UserAccountDetails';
import UserKYCVerification from './dashboard/user_profile/UserKYCVerification';
import Feedback from './dashboard/home/Feedback';
import Transaction_history from './dashboard/home/Transaction_history';

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
          <Route path='/user_profile' element={<UserProfileHome/>} />
          <Route path='/edit_user_profile' element={<UserEditProfile/>} />
          <Route path='/user_change_pwd' element={ <ChangePwd/>} />
          <Route path='/user_account_setting' element={ <UserAccountSetting/>} />
          <Route path='/disable_account' element={ <DisableAccount/>} />
          <Route path='/account_details' element={ <UserAccountDetails/>} />
          <Route path='/kyc_verification' element={ <UserKYCVerification/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/transaction_history' element={<Transaction_history/>} />
         
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
// basename='/sliceLedger/'