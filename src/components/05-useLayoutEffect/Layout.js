import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounterNoFactor } from '../../hooks/useCounterNoFactor';
import { useFectch } from '../../hooks/useFectch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounterNoFactor(1)

    const { data } = useFectch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>use Layout Effect</h1>
            <br />

            <blockquote className='blockquote text-center'>
                <p
                    ref={pTag}
                    className='mb-2'
                >
                    {quote}
                </p>
            </blockquote>

            <button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

        </>
    )
}
