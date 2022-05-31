import React, { useEffect, useRef, useState } from 'react'
import { fabric } from "fabric";

const Home = () => {

    let canvas = new fabric.Canvas();
    const rectRef = useRef()

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
            stroke: 'black',
            strokeWidth: 3,
        });
        canvas.add(rect);
        // canvas.setActiveObject(canvas.item(1));
        rect.set('selectable', true)
    }

    const makeCircle = () => {
        const circle = new fabric.Circle({
            left: 150,
            top: 150,
            fill: 'orange',
            radius: 50,
            stroke: 'black',
            strokeWidth: 3,
        })
        canvas.add(circle);
    }

    const makeEllipse = () => {
        const Ellipse = new fabric.Ellipse({
            left: 150,
            top: 150,
            fill: 'blue ',
            rx: "250",
            ry: "100",
            stroke: 'black',
            strokeWidth: 3,
        })
        canvas.add(Ellipse);
    }

    const makeTriangle = () => {
        const Triangle = new fabric.Triangle({
            left: 250,
            top: 150,
            fill: 'white',
            width: 70,
            height: 60,
            stroke: 'black',
            strokeWidth: 3,
        })
        canvas.add(Triangle);
        canvas.selection = true;
    }

    return (
        <div>
            <h1>This is the Heading 1</h1>
            <h3>Choose the Shape you want to make on the Canvas:</h3>
            <button ref={rectRef} id='rect' onClick={makeRect}>Rectangle</button>
            <button id='circle' onClick={makeCircle}>Circle</button>
            <button id='ellipse' onClick={makeEllipse}>Ellipse</button>
            <button id='triangle' onClick={makeTriangle}>Triangle</button>
            <canvas id="c" />
        </div>
    )
}

export default Home