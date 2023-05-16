import { useEffect, useRef } from "react"

export const DomRef = () => {

    const InputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        InputRef.current?.focus()
    }, [])

    return(
        <input ref={InputRef}></input>
    )
}