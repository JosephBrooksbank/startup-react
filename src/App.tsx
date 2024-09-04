import {VerticalList} from "./components/VerticalList";
import {WelcomeHeader} from "./components/WelcomeHeader";
import {VariableLinks} from "./components/VariableLinks";
import {Clock} from "./components/Clock";

function App() {

    return (
        <div className={"bg-gray-800 min-h-screen text-gray-300"}>
            <VerticalList>
                <WelcomeHeader/>
                <Clock/>
                <VariableLinks/>
            </VerticalList>
        </div>
    )
}

export default App
