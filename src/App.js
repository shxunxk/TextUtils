import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

var a = 'day'

function App() {

  const [theme, setTheme] = useState('light');
  const [sty, setSty] = useState({backgroundColor: 'white', color: 'black'});

  const setColor = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setSty(theme === 'light'  ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white', color: 'black'});
    if(theme === 'dark'){
      setInterval(() => {
      document.title = 'Dark Mode';
      }, 1000);
      setInterval(() => {
      document.title = 'Pan Para pan masala';
      },1500)
    }
}

  return (
  <Router>
  <div>
  <Navbar theme={theme} sty={sty}/>
  <button
          className="mx-1 btn btn-primary"
          onClick={setColor}
        > {theme}
        </button>
  </div>
  <Alert alert="Bhosdike"/>
  <Routes>
    < Route path="/about" element={<About sty={sty}/>}/>
    <Route path="/" element={<TextForm sty={sty}/>}>
    </Route>
  </Routes>
  </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './app.scss'
// import About from './Pages/About.jsx';
// import Home from './Pages/Home.jsx';
// import LatestWork from './Pages/LatestWork.jsx';

// const App = () => {
//   return(
//     <Router>
//       <Routes>
//         <Route path='/'>
//           <Route index element = {<Home/>}/>
//           <Route path='about/' element = {<About/>}/>
//           <Route path='latest-work/' element={<LatestWork/>}/>
//         </Route>
//       </Routes>
//   </Router>
//   )
// };

// export default App;
