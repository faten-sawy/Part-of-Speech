import React, { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import ProgressBar from "../components/progress"
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
        receiveData()       
    },[])

    const receiveData = async ()=>{
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
        
        /* check if answer is correct or wrong */
        if(item === speeches[index].pos){
            ele.setAttribute('style','background-color:green')
            setScore(score+10)
        }
        else{
            setAnswer(`correct answer is ${speeches[index].pos}`);
            ele.setAttribute('style','background-color:red')
        }
    
        /* change question */
        changeToNextWord(ele)
       
    }

    const changeToNextWord = (element:HTMLButtonElement)=>{

        setTimeout(() => {
          setAnswer("");
          element.setAttribute("style", "background-color:none");

          if (index === 9) {
            navigate("/score-rank", { state: { score } });
          }
          setIndex(index + 1);
          changeDisabledButtons(buttons, false);
        }, 2000);

    }

    const changeDisabledButtons = (buttons:NodeListOf<HTMLButtonElement> , value:boolean)=>{

        buttons.forEach((item)=>{
            console.log(item)
           item.disabled = value
        })

    }
    return (
      <div className=" bg-gradient-to-br from-[#09203f]  via-[#2d4a69] to-[#537895] h-[100vh]">
        <div className="relative w-full flex flex-col items-center">
          <h1 className="text-white text-7xl mt-[25vh]">
            {speeches[index].word}
          </h1>
          <p className="text-white text-2xl mt-10">{answer}</p>
          <ProgressBar value={(index / 10) * 100} />

          <div className="flex flex-wrap justify-center mt-20">
            {btns.map((item: string) => (
              <div className="min-h-[50px]  min-[400px]:mr-4 rounded-[50px] mb-4 h-auto min-w-[130px] bg-gradient-to-r from-[#f47c34] to-[#e03f97]">
                <button
                  className="text-white text-xl h-[56px] rounded-[50px] w-[126px] m-[3px] bg-[#2d4a69]"
                  onClick={(e) => handleChoose(item, e)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Speach