import { useState } from 'react'
import {VerticalList} from "./components/VerticalList";
import {Card} from "./components/Card";
import {WelcomeHeader} from "./components/WelcomeHeader";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className={"bg-gray-800 min-h-screen text-gray-300"}>
        <VerticalList>
          <WelcomeHeader/>
          <Card>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </Card>
        </VerticalList>
      </div>
  )
}

export default App
