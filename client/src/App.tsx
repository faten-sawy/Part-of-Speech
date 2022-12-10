import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Speach from './pages/Speech';
import ScoreRank from './pages/ScoreRank';
export interface IApplicationProps {}

const App:React.FunctionComponent<IApplicationProps> = (props) => {
 /*  useEffect(()=>{ 
    receveData()
  },[])

  const receveData = async ()=>{
    const res = await fetch('http://localhost:5000/words')
    const s = await res.json()
    console.log(s)
  } */
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/speech' element={<Speach/>}/>
      <Route path="/score-rank" element={<ScoreRank/>}/>
    </Routes>
    
    </BrowserRouter>
    
   
     
    
  );
}

export default App;
