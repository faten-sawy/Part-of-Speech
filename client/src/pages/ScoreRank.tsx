import { useEffect,useState } from "react"
import { useLocation,useNavigate } from "react-router-dom"

const ScoreRank = () =>{
    const [rank,setRank] = useState(0)
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(()=>{
      fetch('http://localhost:4000/rank',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({score:location.state.score}) 
       }).then(res=>res.json().then(res=>setRank(res)))
    },[])

    return (
      <div className="rank--container bg-gradient-to-br from-[#09203f]  via-[#2d4a69] to-[#537895]">
        <h1 className="rank--text">Your Rank</h1>
        <p className="rank">{rank} %</p>
        <div className="button-container mt-12">
          <button className="button" onClick={() => navigate("/")}>
            Try again
          </button>
        </div>
      </div>
    );
}

export default ScoreRank