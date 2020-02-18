import React, {useEffect, useState} from 'react';
import { createHashHistory } from 'history';
import SideBar from "./side-bar/SideBar";
import axios from 'axios';
import Main from "./main/Main";
import {ActiveToolProvider} from "./active-tool-context";

const App = () => {
    const history = createHashHistory();
    const [tools, setTools] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:3001/v2/tools').then(resp => {
                setTools(resp['data']['tools']);
            })
        }, []);


    return (
        <div id="App">
            <ActiveToolProvider history={history}>
                <header>
                    <p>Tools Portal</p>
                </header>

                <SideBar tools={tools} history={history}/>


                <Main tools={tools} hitory={history}/>

                <footer>
                    Footer
                </footer>
            </ActiveToolProvider>
        </div>
    );
};

export default App;
