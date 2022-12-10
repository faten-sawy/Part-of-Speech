import { Response,Request } from "express"

const {scoresList} = require("../TestData.json")

const calcRank = (req:Request,res:Response) =>{

    const {score} = req.body

   const rankArr = scoresList.filter((item:number) => item<score)

   const rank = (rankArr.length/scoresList.length)*100

    console.log(scoresList)
    console.log(rankArr)

    if(rank.toString().split('').length<=5){
        res.send(rank)
    }
    else{
        res.send(rank.toFixed(2))
    }


    console.log(req.body)
}

export default calcRank