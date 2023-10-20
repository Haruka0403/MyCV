import { useState } from 'react';
import { NavLink, Routes, Route, useParams, Outlet, BrowserRouter } from "react-router-dom";
import Header from './Header.jsx';
import Tab from "./Tab.jsx"
import WorkX from "./WorkX.jsx";
import Education from './Education.jsx';
import Qualifications from './Qualifications.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Interests from './Interests.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />

      <div className="tab_nav">
        <Routes>
          <Route path="" element={<Tab />}>
            <Route path="" element={<WorkX />}></Route>
            <Route path="education" element={<Education />}></Route>
            <Route path="qualifications" element={<Qualifications />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="interests" element={<Interests />}></Route>
          </Route>
        </Routes>
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
