import React, { useEffect, useRef, useState } from 'react'

export const MutableRef = () => {

    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        // To make sure the timer is cleared when the component unmounts, we call the stopTimer function below
        return (() => {
            stopTimer()
        })
    }, [])

  return (
    <div>
        Hooktimer - {timer} -
        <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
