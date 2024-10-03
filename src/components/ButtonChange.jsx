//onChange
import { useState } from "react"

function ButtonChange() {

    const [name,setName] = useState('')

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} value={name} placeholder="Input Kids Name"/>
            <p>Name : {name}</p>
        </div>
    )
}

export default ButtonChange
