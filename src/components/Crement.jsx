import { useState, useEffect } from 'react'

export default function Increment() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        //The code that we want to run
        console.log(`The count is: ${number}`)

        //Optional return
        return () => {
            console.log("This is the number of guests")
        }
    },
        //The dependency array
        [number]
    )

    function increment() {
        setNumber(number + 1)
    }

    function decrement() {
        setNumber(number - 1)
    }

    return (
        <div>
            <p>Count : {number}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

