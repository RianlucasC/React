
const ConditionalRendering = ({display}) => {
  return display ? <p className="p-4 bg-gray-400 m-2 w-[500px] rounded-lg text text-red-500">Conditional Rendering</p> : null;
}

export default ConditionalRendering