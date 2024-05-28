import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Stopwatch = () => {
  
    const [time, setTime] = useState(0)
    const timeHandler = useRef(null)

    const stopwatchStart = () => {
       timeHandler.current = setInterval(()=>{
          setTime(prevTime => prevTime + 1)
        }, 1000)
    }

    const stopwatchStop = () => {
        clearInterval(timeHandler.current)
        // timeHandler.current = null;
    }

    const stopwatchReset = () => {
        setTime(0)
    }

    useEffect(()=>{
        return () => {
            stopwatchStop()
          }
    },[])

    return (
    <div className='stopwatch'>
        <h1>{time}</h1>
        <button type="button" onClick={stopwatchStart}>Start</button>
        <button type="button" onClick={stopwatchStop}>Stop</button>
        <button type="button" onClick={stopwatchReset}>Reset</button>
    </div>
  )
}

export default Stopwatch