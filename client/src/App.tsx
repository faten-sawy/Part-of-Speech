import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Speach from './pages/Speech';
import ScoreRank from './pages/ScoreRank';
export interface IApplicationProps {}

const App:React.FunctionComponent<IApplicationProps> = (props) => {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Speach/>}/>
      <Route path="/score-rank" element={<ScoreRank/>}/>
    </Routes>
    
    </BrowserRouter>
    
   
     
    
  );
}

export default App;
