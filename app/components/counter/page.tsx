"use client"
import {useState} from "react"
   
    export default function CounterSection () 
    {
      //we make a powerful state variable which rander the function when it calls  
        const [countState, setCountState]=useState(0)
      //const [isStatus, setIsStatus] = useState(false), as number we can use state hook varible in Boolean
      //const [email, set Email] = useState("abc@gmail.com") Ias number we can use state hook varible in string
      //then we make a 3 functions "+,-,rest" which rander the function when it calls
              const onClickAddHandler= () =>
        {
        setCountState (countState+1)
        console.log ("count in onClickAddHandler", countState)
        }
        
        const onClickMinusHandler= () =>
        {
            setCountState (countState-1)
        console.log ("count in onClickMinusHandler", countState)
        }
        const resetHandler= () =>
        {
            setCountState(0)
           
        console.log ("count in onClickMinusHandler", countState)
        }
    

//then we make a 3 calling function in return and print what we want
                                console.log("Counter Section Print"); //this console is just for understanding
    return(

    <div><hr /><br /><br />

    <button title="+" onClick={onClickAddHandler} style={{backgroundColor: 'lightseagreen'}}>+</button>
   
    <span>{countState}</span>
    
    <button title="-" onClick={onClickMinusHandler} style={{backgroundColor: 'lightseagreen'}}>-</button><br /><br />

    <button title="Reset" onClick={resetHandler} style={{backgroundColor: 'lightseagreen'}}>Reset</button>

    </div>
    )
    }