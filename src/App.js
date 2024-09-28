import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  
  return (
    <>
   
    <Navbar title='TextUtils' about='About US'/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text"/>
    </div>
    </>
  );
}

export default App;
