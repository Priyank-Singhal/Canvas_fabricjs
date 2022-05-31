import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric';

const Home3 = () => {
    const [x, setX] = useState(50)
    const [y, setY] = useState(50)
    const [w, setW] = useState(90)
    const [h, setH] = useState(90)

    const makeRect = () => {
        const canvas = new fabric.Canvas('c', {
            width: 1900,
            height: 850,
            // backgroundColor: 'grey'
        });

        const rect = new fabric.Rect({
            left: 50,
            top: 50,
            fill: 'red',
            width: 90,
            height: 90
        });

        canvas.add(rect);
        canvas.on('object:modified', () => {
            console.log('Modified')
            const left = rect.get('left')
            const top = rect.get('top')
            const width = rect.get('width')
            const height = rect.get('height')
            console.log(rect.get('height'))
            setX(left)
            setY(top)
            setW(width)
            setH(height)
        })
        canvas.on('event:dragover', ()=> {
            console.log(rect.get('height'))

        })
        rect.set({
            left: x, top: y,
            width: w,
            height: h
        })
        canvas.on('mouse:dblclick', () => {
            console.log('x-axis position: ', rect.get('left'))
            console.log('Double Click')
        })
    }


    useEffect(() => {
        makeRect()
    })

    return (
        <div>
            {/* <button onClick={makeRect}>make rect</button> */}
            <h2>This is the </h2>
            <h3>X coordinate: {x}</h3>
            <canvas id='c'></canvas>
        </div>
    )
}

export default Home3