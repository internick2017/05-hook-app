import React from 'react'
import { useCounterNoFactor } from '../../hooks/useCounterNoFactor';
import { useFectch } from '../../hooks/useFectch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounterNoFactor(1)

    const { loading, data } = useFectch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    console.log(author, quote);
    return (
        <>
            <h1>breakingbad Quotes</h1>
            <br />

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            loading ...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-center'>
                            <p className='mb-2'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>



        </>
    )
}
