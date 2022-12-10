import React from "react"
import {Link} from "react-router-dom"

function Home() {
    return (
        <button>
            <Link to="/speech">
                Get Started
            </Link>
        </button>
    )
}

export default Home