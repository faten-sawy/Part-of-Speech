import { useEffect,useState } from "react"
import { useLocation,useNavigate } from "react-router-dom"
const ScoreRank = () =>{
    const location = useLocation()
    const [rank,setRank] = useState(0)
    const navigate = useNavigate()
    console.log(location.state.score)

    useEffect(()=>{
      fetch('http://localhost:5000/rank',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({score:location.state.score}) 
       }).then(res=>res.json().then(res=>setRank(res)))
    },[])        
    return(
        <>
        <p>Score Rank</p>
        <p>{rank} %</p>
        <button onClick={()=>navigate('/speech')}>Try again</button>
        </>
        
    )
}

export default ScoreRank