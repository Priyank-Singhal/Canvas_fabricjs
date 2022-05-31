import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric';
import '../index.css'

const Circle = () => {
    const [cirX, setCirX] = useState(180)
    const [cirY, setCirY] = useState(120)
    const [clicked, setClicked] = useState(false)

    const makeRect = () => {
        const canvas = new fabric.Canvas('c', {
            width: 450,
            height: 350,
            backgroundColor: '#FF00A6'
        });

        const circle = new fabric.Circle({
            left: cirX,
            top: cirY,
            fill: '#00FF59',
            stroke: 'black',
            strokeWidth: 1,
            radius: 50
        });

        canvas.add(circle);
        canvas.on('object:modified', () => {
            const left = circle.get('left')
            const top = circle.get('top')
            setCirX(left)
            setCirY(top)
        })
        canvas.on('selection:created', () => {
            setClicked(true)
        })
        canvas.on('selection:cleared', () => {
            setClicked(false)
        })

        circle.set({
            left: cirX,
            top: cirY
        })
        canvas.renderAll();
    }


    useEffect(() => {
        makeRect()
    })

    return (
        <div className='canvas'>
                <div>
                    <h2>Circle</h2>
                    <h3>Shape Clicked: {`${clicked}`}</h3>
                    <h3>X coordinate: {cirX}</h3>
                    <h3>Y coordinate: {cirY}</h3>
                </div>
            <canvas id='c'></canvas>

        </div>
    )
}

export default Circle   