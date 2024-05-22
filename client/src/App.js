import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
<<<<<<< HEAD
import AppFooter from './design/modules/views/AppFooter';
import AppAppBar from './design/modules/views/AppAppBarManager';
import SignUp from './design/modules/views/SignUp';
import UserSlice from '../src/Store/Slices/UserSlice'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Routes } from 'react-router-dom';
import SignIn from './design/modules/views/SignIn';
import Home from './design/modules/components/HomeProduct';
import ErrorPages from './design/modules/components/ErrorPages';
=======
import ProductCategories from './design/modules/views/ProductCategories';
import ProductSmokingHero from './design/modules/views/ProductSmokingHero';
import AppFooter from './design/modules/views/AppFooter';
import ProductHero from './design/modules/views/ProductHero';
import ProductValues from './design/modules/views/ProductValues';
import ProductHowItWorks from './design/modules/views/ProductHowItWorks';
import ProductCTA from './design/modules/views/ProductCTA';
import AppAppBar from './design/modules/views/AppAppBar';
import withRoot from './design/modules/withRoot';
import SignUp from './design/SignUp';
import UserSlice from '../src/Store/Slices/UserSlice'
import ProductSlice from './Store/Slices/VacationSlice'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Routes } from 'react-router-dom';
import SignIn from './design/SignIn';
import Home from './design/Home';
import ErrorPages from './design/modules/ErrorPages';
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
import authSlice from './Store/Slices/authSlice';
import VacationSlice from './Store/Slices/VacationSlice';
import apiSlice from './Store/Slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
<<<<<<< HEAD
import HomeManager from './design/modules/components/HomeManager'
import UserList from './Store/app/AcssesDBVacations-AddVacation';
import StatusSlice from './Store/Slices/StatusSlice'
import  Shop2 from './design/modules/components/Shop2'
import  Shop from './design/modules/components/Shop'
import Enter from './design/modules/components/Enter'
import HomeBeforeSingIn from './design/modules/components/HomeBeforeRegister'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import FinishBuying from './design/modules/components/FinishBuying'
import './design/css/index.css';
import Info from './Store/app/GetVacationInfo';
import Package from './design/modules/components/Package';
import MNGUser from './design/modules/components/MNGUser'
import SideCart from './design/modules/components/SideCart ';
import useAuth from './Store/app/useAuth'
import AppUser from './design/modules/views/AppAppBarUser';
import ForgotPassword from './design/modules/components/ForgotPassword';
import MNGUserRegister from './design/modules/components/MNGUserRegistered';
import Contact from './design/modules/components/Contact';
import PayPal from './design/modules/components/PayPal';
import Terms from './design/modules/views/Terms'
import Privacy from '../src/design/modules/views/Privacy'
import GetAllVacationListList from '../src/Store/app/AcssesDBVacation'
=======
import HomeManager from './design/modules/views/HomeManager'
import VacationList from './Store/VacationList';
import UserList from './Store/UserList';
import StatusSlice from './Store/Slices/StatusSlice'
import  Shop2 from '../src/design/modules/components/Shop2'
import Enter from './design/modules/components/Enter'
import HomeBeforeSingIn from './design/HomeBeforeRegister'
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import FinishBuying from './Store/our_components/FinishBuying'
import './index.css';
import Info from './Store/Info';
import Package from './Store/our_components/Package';
import MNGUser from './Store/our_components/MNGUser'
import Sidebar2 from './Store/our_components/Sidebar2';
import useAuth from './Store/app/useAuth'
import AppUser from './design/modules/views/AppUser';
import ForgotPassword from './design/ForgotPassword';
import MNGUserRegister from './Store/our_components/MNGUserRegistered';
import Contact from './Store/our_components/Contact';
import PayPal from './Store/PayPal';
import SendEmailTamae from '../src/design/modules/views/SendEmailTamae'
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
const myStore = configureStore({
  reducer: {
    //  TaskSlice, 
    UserSlice,
    //ProductSlice,
    authSlice,StatusSlice,



    [apiSlice.reducerPath]: apiSlice.reducer,
    VacationSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false
});

setupListeners(myStore.dispatch);
 
function App() {
  const  { _id:userId,firstname,lastname, email,roles}=useAuth()
  const token =localStorage.getItem("token")
  return (
    <div className="App">
      
      {roles==='Manager'?<AppAppBar/>:<AppUser/>}
    
      <React.Fragment>
        <Provider store={myStore}>
          <Router>
          <Routes>
            <Route path='/' element={token?<Home/>:<HomeBeforeSingIn/>} />
            <Route path='/UserList' element={<UserList />} />
            <Route path='/SignUp' element={<SignUp />} />
            {/* <Route path='/VacationList' element={<VacationList />} /> */}
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Enter' element={<Enter />} />
<<<<<<< HEAD
            <Route path="/Shop2" element={<Shop2 />} />
            <Route path="/GetAllVacationListList" element={<GetAllVacationListList />} />
=======
            <Route path="/Shop" element={<Shop2 />} />
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
            <Route path='/User' element={<SignIn />} />
            <Route path='/info' element={<Info />} />
            <Route path='/PayPal' element={<PayPal />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/homemanage' element={<HomeManager />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/Package' element={<Package />} />
<<<<<<< HEAD
            <Route path='/SideCart ' element={<SideCart />} />
            <Route path='/MNGUser' element={<MNGUser />} />
            <Route path='/MNGUserRegister' element={<MNGUserRegister />} />
            <Route path='/Terms' element={<Terms />} />
            <Route path='/Privacy' element={<Privacy />} />
            <Route path='/SideCart' element={<SideCart />} />
            <Route path='*' element={<ErrorPages />} />
            <Route path='/FinishBuying' element={<FinishBuying />} />
          </Routes>
          </Router>
=======
            <Route path='/Sidebar2' element={<Sidebar2 />} />
            <Route path='/MNGUser' element={<MNGUser />} />
            <Route path='/MNGUserRegister' element={<MNGUserRegister />} />
            <Route path='*' element={<ErrorPages />} />
            <Route path='/FinishBuying' element={<FinishBuying />} />
            <Route path='/SendEmailTamae' element={<SendEmailTamae />} />
          </Routes>
          </Router>
          {/* <AppAppBar /> */}
          {/* <ProductHero />
          <ProductValues />
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero /> */}
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
          <AppFooter />
        </Provider>
      </React.Fragment>
    </div>
  );
}
 
export default App;
