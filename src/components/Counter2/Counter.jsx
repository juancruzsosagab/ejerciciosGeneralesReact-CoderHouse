import { useState } from 'react';


const Counter = () =>{

    const [counter, setCounter] = useState(0);
    const [dateClick, setDateClick] = useState("");
    const add = ()  =>{
        setCounter(counter + 1);
        setDateClick(()=>{ 
        let date = new Date();
        return date.toString()});
    }

    return(
        <>
        <input type="button" value="Do click!" onClick={add} />
        <h2>{counter}</h2>
        <h2>{dateClick}</h2>  
        </>

    );

}


export default Counter;