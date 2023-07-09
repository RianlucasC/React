
const listNumbers = [1, 2, 3, 4, 5]

const RenderingLists = () => {
  return (
    <div className="flex p-4 bg-gray-400 m-2 w-[500px] rounded-lg text text-purple-500">RenderingLists : {listNumbers.map((number) => <p key={number} className="mx-1 p-1 bg-white rounded">{number}</p>)}</div>
  )
}

export default RenderingLists