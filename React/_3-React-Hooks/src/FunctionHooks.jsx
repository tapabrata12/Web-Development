import { useState } from "react";

const FunctionHooks = () => {
    // React spacial variable diclaration
    const [a, setA] = useState(20);
    // setA ek function hai jo react se jake kahata hai ki value ko change karna hai

    const change = ()=>{
        setA(80);
    }
    return (
        <div>
            <h1>Here I want to change some value reflected in the frontend Part using React Hooks</h1>
            <p>React Hooks are functions introduced in React 16.8 that allow you to "hook into" React features from functional components. Prior to Hooks, state and lifecycle methods were primarily managed within class components. Hooks enable functional components to utilize these features, leading to cleaner, more reusable, and often more readable code.</p>
            <br /><br />
            <p>The value of a is {a}</p>
            <button onClick={change}>Change the value</button>
        </div>
    )
}

export default FunctionHooks;