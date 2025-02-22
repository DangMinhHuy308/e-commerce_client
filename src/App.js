import React from 'react';
import {Route,Routes} from 'react-router-dom'
import {Login, Home, Public} from'./pages/public'
import path from './utils/path';
function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          
        </Route>

      </Routes>
    </div>
  );
}

export default App;
