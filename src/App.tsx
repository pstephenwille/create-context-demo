import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./mm-tool-1/home/Home";
import Home2 from "./mm-tool-2/home/Home2";

const App = (props) => {
    const [toolToggle, setToolName] = useState(false);

    let toggleTool = () => {
        setToolName(!toolToggle)
        console.log('...toggle', window.location.hash);
        toolToggle
            ? window.location.hash = '#/mm-tools2'
            : window.location.hash = '#/services';

    };
    return (
        <div className="App">
            <h1>Tools</h1>
            <div onClick={() => toggleTool()}>Toggle tools <strong>{toolToggle.toString()}</strong></div>
            {
                toolToggle
                    ? <Home/>
                    : <Home2/>
            }
        </div>
    );
};

export default App;
