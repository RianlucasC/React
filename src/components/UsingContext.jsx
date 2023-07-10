import { useContext } from "react"
import { NameContext } from "./NameContext"

const UsingContext = () => {
    const data = useContext(NameContext);

    console.log(data)
  return (
    <div className="flex p-4 bg-gray-400 m-2 w-[500px] rounded-lg text text-pink-500">
        Using Context: {data.msg}
    </div>
  )
}

export default UsingContext