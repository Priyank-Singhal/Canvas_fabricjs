import React, { useEffect, useState } from 'react'
import { fabric } from "fabric";

const Home = () => {

    let canvas = new fabric.Canvas();

    useEffect(() => {
        canvas = new fabric.Canvas('c', {
            height: 800,
            width: 1000,
            backgroundColor: 'pink'
        })
    })

    const makeRect = () => {
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 85,
            height: 85,
        });
        canvas.add(rect);
    }

    const makeCircle = () => {
        const circle = new fabric.Circle({
            left: 150,
            top: 150,
            fill: 'orange',
            radius: 50
        })
        canvas.add(circle);
    }
        
    return (
        <div>
            <h1>This is the Heading 1</h1>
            <h3>Choose the Shape you want to make on the Canvas:</h3>
            <button onClick={makeCircle}>Circle</button>
            <button>Ellipse</button>
            <button onClick={makeRect}>Rectangle</button>
            <button>Triangle</button>
            <canvas id="c" />
        </div>
    )
}

export default Home