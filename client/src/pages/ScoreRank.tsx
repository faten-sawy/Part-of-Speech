import { useEffect,useState } from "react"
import { useLocation,useNavigate } from "react-router-dom"

const ScoreRank = () =>{
    const location = useLocation()
    const [rank,setRank] = useState(0)
    const navigate = useNavigate()
    console.log(location.state.score)

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
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#09203f]  via-[#2d4a69] to-[#537895] h-[100vh]">
        <h1 className="text-white text-7xl">Your Rank</h1>
        <p className="mt-8 text-white text-5xl">{rank} %</p>
        <div className="min-h-[50px] mt-10  min-[400px]:mr-4 rounded-[50px] mb-4 h-auto min-w-[150px] bg-gradient-to-r from-[#f47c34] to-[#e03f97]">
          <button
            className="text-white  text-xl h-[56px] rounded-[50px] w-[146px] m-[3px] bg-[#2d4a69]"
            onClick={() => navigate("/")}
          >
            Try again
          </button>
        </div>
      </div>
    );
}

export default ScoreRank