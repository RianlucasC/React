import { useState } from "react"

const UsingStates = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1) 
    }

  return (
    <div className="flex p-4 bg-gray-400 m-2 w-[500px] rounded-lg">RespondingToEvents 
        <button onClick={handleClick} className="bg-white rounded p-1 mx-2">Click here to add one more</button>
        {count}
    </div>
  )
}

export default UsingStates