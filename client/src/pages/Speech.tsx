import React, { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import ProgressBar from "../components/progress"
import { word , initialWord, btns } from "../helper"


const Speech = () => {
    const [speeches,setSpeeches] = useState<word[]>([initialWord])
    const [index,setIndex] = useState(0)
    const [score,setScore] = useState(0)

    const navigate = useNavigate()

    useEffect(()=>{
        receiveData()       
    },[]) 

    const receiveData = async ():Promise<void> =>{
      const res = await fetch('http://localhost:4000/words')
      const data = await res.json()
      setSpeeches(data)
      console.log(data);

    }
    
    const handleChoose =(item:string,e:React.FormEvent):void =>{
      const ele = e.target as HTMLButtonElement
      const buttons = document.querySelectorAll('button')
      const correctAnswer = speeches[index].pos;

      resetButtonsStyle(buttons,true)
      ele.disabled =false
      
      /* check if answer is correct or wrong */
      if(item === correctAnswer){
        ele.setAttribute('style','background-color:green')
        setScore(score+10)
      }
      else{
        const correctElement = [...buttons].find(
          (item: HTMLButtonElement) =>
              item.innerHTML === correctAnswer
          );
        correctElement?.setAttribute('style','background-color:green')
        ele.setAttribute('style','background-color:red')
      }
  
      /* change word */
      changeToNextWord(ele,buttons)
       
    }

    const changeToNextWord = (element:HTMLButtonElement,buttons:NodeListOf<HTMLButtonElement>):void =>{

      setTimeout(() => {
        /* navigate to rank page if words finished */
        if (index === 9) {

          navigate("/score-rank", { state: { score } });
          
        }
        setIndex(index + 1);
        resetButtonsStyle(buttons, false);
      }, 1000);

    }

    const resetButtonsStyle = (buttons:NodeListOf<HTMLButtonElement> , value:boolean):void =>{
      buttons.forEach((item)=>{
          item.disabled = value
          item.setAttribute("style", "background-color:none");
      })
    }
    return (
      <div className="bg-gradient-to-br from-[#09203f]  via-[#2d4a69] to-[#537895] h-[100vh]">
        <div className="second--container">
          <h1 className="word--style">{speeches[index].word}</h1>

          <ProgressBar value={(index / 10) * 100} />

          <div className="buttons--container">
            {btns.map((item: string) => (
              <div className="button-container" key={item}>
                <button
                  className="button"
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

export default Speech
