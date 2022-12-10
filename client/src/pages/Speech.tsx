import React, { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"

interface word{
    id:number,
    word:string,
    pos:string
}
const initialWord = {
    id:0,
    word:'',
    pos:''
}
const btns =['noun','adverb','adjective','verb']
const Speach = () => {
    const [speeches,setSpeeches] = useState<word[]>([initialWord])
    const [index,setIndex] = useState(0)
    const [answer,setAnswer] = useState('')
    const [score,setScore] = useState(0)

    const navigate = useNavigate()

    useEffect(()=>{
        receveData()
        
    },[])

    const receveData = async ()=>{
        const res = await fetch('http://localhost:4000/words')
        const s = await res.json()
        setSpeeches(s)

        console.log(s)   
    }
    
    const handleChoose =(item:string,e:React.FormEvent) =>{
        const ele = e.target as HTMLButtonElement

        const buttons = document.querySelectorAll('button')

        changeDisabledButtons(buttons,true)
        ele.disabled =false
        
        if(item === speeches[index].pos){
            setAnswer('correct answer')
            ele.setAttribute('style','background-color:green')
            setScore(score+10)

        }
        else{
            setAnswer('wrong answer')
            ele.setAttribute('style','background-color:red')

        }
    
        /* change question */
        
        setTimeout(()=>{
            
            setAnswer('')
            ele.setAttribute('style','background-color:none')

            if(index === 9){
                navigate('/score-rank',{state:{score}})

            }
            setIndex(index+1)
            changeDisabledButtons(buttons,false)
           
        },2000)
    }

    const changeDisabledButtons = (buttons:NodeListOf<HTMLButtonElement> , value:boolean)=>{

        buttons.forEach((item)=>{
            console.log(item)
           item.disabled = value
        })

    }
    return(
        <>
       <p>{speeches[index].word}</p>
       <p>{answer}</p>
       <p>{(index/10)*100}%</p>
       <p>Score:{score}%</p>
       {btns.map((item:string)=>(
            <button onClick={(e)=>handleChoose(item,e)}>
                {item}
            </button>
       ))
       }
       
        </>
    )
}

export default Speach