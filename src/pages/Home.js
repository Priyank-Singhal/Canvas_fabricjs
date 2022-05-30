import React, { useEffect, useState } from 'react'
import { fabric } from "fabric";

const Home = () => {

    const [canvas, setCanvas] = useState('');

    const initCanvas = () => (
        new fabric.Canvas('c', {
            height: 800,
            width: 1000,
            backgroundColor: 'pink'
        })
    );

    const makeRect = () => {
        const canvas = new fabric.Canvas('c');
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 85,
            height: 85,
        });
        canvas.add(rect);
    }

    const makeCircle =() => {
        const canvas = new fabric.Canvas('c');
        const circle = new fabric.Circle({
            left: 150,
            top: 150,
            fill: 'orange',
            radius: 50
        })
        canvas.add(circle)
    }

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    return (
        <div>
            <h1>This is the Heading 1</h1>
            <h3>Choose the Shape you want to make on the Canvas:</h3>
            <button onClick={makeCircle}>Circle</button>
            <button>Ellipse</button>
            <button onClick={makeRect}>Rectangle</button>
            <button>Triangle</button>
            {/* <button></button> */}
            <canvas id="c" />
        </div>
    )
}

export default Home