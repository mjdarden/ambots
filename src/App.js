import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import TeamMembers from './TeamMembers'
import Home from './Home'

let App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/teammembers' element={<TeamMembers/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App