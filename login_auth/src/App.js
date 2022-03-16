import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes'
import Login from './Components/Login'
import { Fragment } from 'react';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>

            <Route path="/" element={<Login />} exact />

            <Route exact path="/Home" element={<ProtectedRoutes />}>
              <Route path="/Home" element={<Home />} exact />
            </Route>

          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
