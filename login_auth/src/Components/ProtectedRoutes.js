import React from "react";
import { Outlet, Navigate } from 'react-router-dom';

export const name = React.createContext("")

const ProtectedRoutes = () => {

  const hasToken = localStorage.getItem('token');


  return hasToken !== null && hasToken !== 'undefined' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;