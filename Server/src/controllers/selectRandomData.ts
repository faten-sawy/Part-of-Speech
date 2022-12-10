import { Request,Response } from "express"
const data = require("../../TestData.json")

interface wordObj {
    id:number,
    word:string,
    pos:string
}

const randomData = (req:Request,res:Response) =>{
    const {wordList} = data
    let actualData:wordObj[] =[]

    while(actualData.length<10){
        for(let i =0;i<10;i++){
            const number = Math.floor(Math.random()*15)
    
            actualData[i] =wordList[number]
    
         }

         actualData = [...new Set(actualData)]

    }
    res.send(actualData)
}

export default randomData