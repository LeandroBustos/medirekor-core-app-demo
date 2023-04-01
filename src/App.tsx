import React, { useEffect, useState } from 'react';

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Encounters from './components/Encounters';
import PatientChart from './components/PatientChart';
import { UserContext } from './contexts/UserContext';
import Dashboard from './components/Dashboard';
import WorkingOn from './components/WorkingOn';
import Patient from './components/Patient';

function App() {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(userData){
      sessionStorage.setItem('userData', JSON.stringify(userData))
      navigate('/home')
    }
  }, [userData])

  return (
    <div className="App">
      <UserContext.Provider value={userData || JSON.parse(sessionStorage.getItem('userData') as string)}>
          <Routes>
            <Route path="/" element={<Navigate to={`${JSON.parse(sessionStorage.getItem('userData') as string) ? "/home" : "/login"}`}/>}/>
            <Route path='/home' element={
              JSON.parse(sessionStorage.getItem('userData') as string) ? 
              <Home/> :
              <Navigate to='/login'/>
            }
            >
              <Route index element={<Dashboard/>}/>
              <Route path='encounters' element={<Encounters/>}/>
              <Route path='encounters/patient/:id' element={<Patient/>}>
                <Route index path='chart' element={<PatientChart/>}/>
                <Route path='encounters' element={<WorkingOn/>}/>
                <Route path='laboratory' element={<WorkingOn/>}/>
                <Route path='radiology' element={<WorkingOn/>}/>
                <Route path='diagnoses' element={<WorkingOn/>}/>
                <Route path='referrals' element={<WorkingOn/>}/>
                <Route path='chronic-diseases' element={<WorkingOn/>}/>
                <Route path='prescriptions' element={<WorkingOn/>}/>
              </Route>
            </Route>
            <Route path='/login' element={
              JSON.parse(sessionStorage.getItem('userData') as string) ?
              <Navigate to='/'/> :
              <Login setUserData={setUserData}/>
            }/>
          </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
