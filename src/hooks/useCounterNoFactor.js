import { useState } from "react"

export const useCounterNoFactor = (initialCounter = 10) => {

    const [counter, setCounter] = useState(initialCounter);

    const reset = () => {
        setCounter(initialCounter);
    }
    const increment = (factor = 1) => {
        setCounter(counter + 1);
    }

    const decrement = (factor = 1) => {
        setCounter(counter - 1);
    }

    return {
        counter,
        reset,
        increment,
        decrement
    };



}
