import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric';
import '../index.css'

const Rectangle = () => {
    const [rectX, setRectX] = useState(180)
    const [rectY, setRectY] = useState(120)
    const [clicked, setClicked] = useState(false)

    const makeRect = () => {
        const canvas = new fabric.Canvas('r', {
            width: 450,
            height: 350,
            backgroundColor: 'yellow'
        });

        const rect = new fabric.Rect({
            left: rectX,
            top: rectY,
            fill: 'red',
            width: 90,
            stroke: 'black',
            strokeWidth: 1,
            height: 90
        });

        canvas.add(rect);
        canvas.on('object:modified', () => {
            console.log('sfkb')
            const left = rect.get('left')
            const top = rect.get('top')
            setRectX(left)
            setRectY(top)
        })
        canvas.on('selection:created', () => {
            setClicked(true)
        })
        canvas.on('selection:cleared', () => {
            setClicked(false)
        })

        rect.set({
            left: rectX,
            top: rectY,
        })
        canvas.renderAll();
    }


    useEffect(() => {
        makeRect()
    })

    return (
        <div className='canvas'>
            {/* <button onClick={makeRect}>make rect</button> */}
                <div>
                    <h2>Rectangle</h2>
                    <h3>Shape Clicked: {`${clicked}`}</h3>
                    <h3>X coordinate: {rectX}</h3>
                    <h3>Y coordinate: {rectY}</h3>
                </div>
            <canvas id='r'></canvas>

        </div>
    )
}

export default Rectangle