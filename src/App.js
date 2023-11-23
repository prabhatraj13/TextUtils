// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode hass been Enabled", "success");
      // document.title = 'Textutils - Dark Mode'
      // setInterval(() => {
      // document.title = 'Textutils is Amazing Mode'
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install Textutils is Amazing Mode'
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      // document.title = 'Textutils - Light Mode'

    }
  
    
  }
  return (
    <>
    {/* <Navbar title="Textutils2" aboutText="About Textutils" /> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm showAlert={showAlert}heading="Enter the Text to Analyze Below" mode={mode}/>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    
    </>
  );
}

export default App;
