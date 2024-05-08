import React, {useState} from "react";

const useCounter = (value)=>{

    const [count, setCount] = useState(value | 0);

    const increment = ()=>{
        setCount(prev => prev + 1)
    }

    const decrement = ()=>{
        setCount(prev => prev - 1)
    }

    return {count, increment, decrement}
}

export default useCounter;