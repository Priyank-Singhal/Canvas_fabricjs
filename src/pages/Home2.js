import React, { useEffect, useRef, useState } from 'react'
import { fabric } from "fabric";

const Home2 = () => {

    let canvas = new fabric.Canvas('c');
    const rectRef = useRef()

    // useEffect(() => {
    //     canvas = new fabric.Canvas('c', {
    //         height: 800,
    //         width: 1000,
    //         // backgroundColor: 'pink'
    //     })
    // })
console.log('dkf')
    const makeRect = () => {
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 85,
            height: 85,
            stroke: 'black',
            strokeWidth: 3,
        });
        canvas.add(rect);
        // canvas.setActiveObject(canvas.item(1));
    }
    // canvas.renderAll()

    // rectRef.click(()=> {
    //     canvas.setActiveObject(canvas.item(0));
    // })

    console.log(rectRef.current)

    return (
        <div>
            <h1>This is the Heading 1</h1>
            <h3>Choose the Shape you want to make on the Canvas:</h3>
            <button id='rect' onClick={makeRect}>Rectangle</button>
            <canvas ref={rectRef} id="c" />
            {/* <canvas ref={rectRef} id='r' /> */}
        </div>
    )
}

export default Home2