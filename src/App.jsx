import ConditionalRendering from "./components/ConditionalRendering"
import FirstComponent from "./components/FirstComponent"
import RenderingLists from "./components/RenderingLists"
import UsingProps from "./components/UsingProps"

function App() {

  return (
    <>
      <FirstComponent/>
      <UsingProps text='This component uses props'/>
      <ConditionalRendering display={true}/>
      <RenderingLists/>
    </>
  )
}

export default App
