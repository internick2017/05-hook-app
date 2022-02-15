import React from 'react'
import { useFectch } from '../../hooks/useFectch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const state = useFectch(`https://www.breakingbadapi.com/api/quotes/6`);
    console.log(state);
    return (
        <>
            <h1>Custom Hooks!!!!!!</h1>
        </>
    )
}
