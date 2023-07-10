import ConditionalRendering from "./components/ConditionalRendering"
import FirstComponent from "./components/FirstComponent"
import RenderingLists from "./components/RenderingLists"
import RespondingToEvents from "./components/RespondingToEvents"
import UsingProps from "./components/UsingProps"
import UsingStates from "./components/UsingStates"
import { NameContext } from "./components/NameContext"
import UsingContext from "./components/UsingContext"

function App() {

  return (
    <NameContext.Provider value={{msg: 'this data is being passed through a context'}}>
      <FirstComponent/>
      <UsingProps text='This component uses props'/>
      <ConditionalRendering display={true}/>
      <RenderingLists/>
      <RespondingToEvents/>
      <UsingStates/>
      <UsingContext/>
    </NameContext.Provider>
  )
}

export default App
