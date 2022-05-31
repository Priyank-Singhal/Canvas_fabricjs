import React, { useEffect, useRef, useState } from 'react'
import { fabric } from "fabric";

const makeRect = () => {
    let canvas = new fabric.Canvas('c');
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
const Home2 = () => {

    return (
        <div>
            <h1>This is the Heading 1</h1>
            <h3>Choose the Shape you want to make on the Canvas:</h3>
            <button id='rect' onClick={makeRect}>Rectangle</button>
            <canvas id="c" />
            {/* <canvas ref={rectRef} id='r' /> */}
        </div>
    )
}

export default Home2