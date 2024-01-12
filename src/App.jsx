import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

import Button from 'react-bootstrap/Button';
import RootLayout from "./components/RootLayout";

import Home from "./pages/Home";
import Test from "./pages/Test";

// Use Bootstrap
// Step 1 : npm install react-bootstrap bootstrap
// Step 2 : import "bootstrap/dist/css/bootstrap.min.css"

// Bootstrap Icon
// Step 1 : npm i bootstrap-icons
// Step 2 : import "bootstrap-icons/font/bootstrap-icons.css";
// Step 3 : Example : <i className="bi-arrow-right-square-fill fs-5 me-2"></i>

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
