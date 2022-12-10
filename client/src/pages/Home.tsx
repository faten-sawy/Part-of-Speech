import React from "react"
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="bg-gradiant flex justify-center items-center h-[100vh]">
            <button className="bg-black">
            <Link to="/speech">
                Get Started
            </Link>
        </button>
        </div>
        
    )
}

export default Home