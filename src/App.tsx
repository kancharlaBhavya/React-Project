import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import keycloak from './Keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

import Firstpage from './firstpage';
import PrivateRoute from './helper/PrivateRoute';

function App() {
  // const isLogin = useAuth();

  return  (
  
   
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>
          <Route path="/AboutPage" element={<PrivateRoute><Dashboard onLogout={function (): void {
            throw new Error('Function not implemented.');
          } } profilePicUrl={''} children={undefined}/></PrivateRoute>}/>
        </Routes></BrowserRouter>
   

    
    );
}

export default App;


