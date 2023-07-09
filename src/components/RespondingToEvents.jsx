
const RespondingToEvents = () => {
    function handleClick() {
        alert('Great')
    }
  return (
    <div className="flex p-4 bg-gray-400 m-2 w-[500px] rounded-lg text text-yellow-500">RespondingToEvents 
        <button onClick={handleClick} className="bg-white rounded p-1 ml-2">Click here</button>
    </div>
  )
}

export default RespondingToEvents