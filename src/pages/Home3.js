import React from 'react'
import { fabric } from 'fabric';

const makeRect = () => {
    var canvas = new fabric.Canvas('c');

    // create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
}

const Home3 = () => {
    return (
        <div>
            <button onClick={makeRect}>make rect</button>
            <canvas id='c'></canvas>
        </div>
    )
}

export default Home3