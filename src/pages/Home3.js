import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric';

const Home3 = () => {
    const [x, setX] = useState(50)
    const [y, setY] = useState(50)
    const [clicked, setClicked] = useState(false)

    const makeRect = () => {
        const canvas = new fabric.Canvas('c', {
            width: 1900,
            height: 850,
            backgroundColor: 'grey'
        });

        const rect = new fabric.Rect({
            left: x,
            top: y,
            fill: 'red',
            width: 90,
            height: 90
        });

        canvas.add(rect);
        canvas.on('object:modified', () => {
            const left = rect.get('left')
            const top = rect.get('top')
            setX(left)  
            setY(top)
        })
        canvas.on('selection:created', ()=>{
            setClicked(true)
        })
        canvas.on('selection:cleared', ()=>{
            setClicked(false)
        })
        
        rect.set({
            left: x,
            top: y,
        })
        canvas.renderAll();
    }


    useEffect(() => {
        makeRect()
    })

    return (
        <div>
            {/* <button onClick={makeRect}>make rect</button> */}
            <h2>This is the </h2>
            <h3>Shape Clicked: {`${clicked}`}</h3>
            <h3>X coordinate: {x}</h3>
            <h3>Y coordinate: {y}</h3>
            <canvas id='c'></canvas>
        </div>
    )
}

export default Home3