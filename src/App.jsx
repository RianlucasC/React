import ConditionalRendering from "./components/ConditionalRendering"
import FirstComponent from "./components/FirstComponent"
import RenderingLists from "./components/RenderingLists"
import RespondingToEvents from "./components/RespondingToEvents"
import UsingProps from "./components/UsingProps"

function App() {

  return (
    <>
      <FirstComponent/>
      <UsingProps text='This component uses props'/>
      <ConditionalRendering display={true}/>
      <RenderingLists/>
      <RespondingToEvents/>
    </>
  )
}

export default App
