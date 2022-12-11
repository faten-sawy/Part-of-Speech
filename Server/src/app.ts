import express,{Application,Request,Response} from 'express'
import randomData from "./controllers/selectRandomData"
import calcRank from './controllers/calcRank'

export const app:Application = express()

const cors = require("cors")
const port = 4000
app.use(cors())
app.use(express.json())

app.get('/words',randomData)
app.post('/rank',calcRank)

app.get('/',(req:Request,res:Response)=>{
    const arr:number[] = [1,2,3,5]
    res.send(arr)
})


app.listen(port,()=>console.log('Server running'))