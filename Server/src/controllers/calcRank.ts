import { Response,Request } from "express"

const {scoresList} = require("../../TestData.json")

const calcRank = (req:Request,res:Response) =>{

    const {score} = req.body
    console.log(score)
    /* filter all scores less than my score to calculate rank */
   const rankArr = scoresList.filter((item:number) => item<score)
   console.log(rankArr)

   const rank = (rankArr.length/scoresList.length)*100
   console.log(rank)

    if(rank.toString().split('').length<=5){ // if number in formate 00.00
        console.log('less than',rank)
        res.send(rank + "")
    }
    else{
        console.log('bigger than',rank)
        res.send(rank.toFixed(2) + "")
    }
}

export default calcRank