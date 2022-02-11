import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords;

    useEffect(() => {

        const mousemove = (e) => {
            const coords = { x: e.x, y: e.y }
            setcoords(coords)
        }

        window.addEventListener('mousemove', mousemove);

        return () => {
            window.removeEventListener('mousemove', mousemove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial! Nick</h3>
            <p> x: {x} e y: {y} </p>
        </div>
    )
}
