import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from "./mm-tool-1/home/Home";
import Home2 from "./mm-tool-2/home/Home2";
import SideBar from "./side-bar/SideBar";
import axios from 'axios';
import Main from "./main/Main";
import {ActiveToolContext} from "./active-tool-context";

const App = () => {
    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:3001/v2/tools').then(resp => {
                setCategories(resp['data']['tools']);
            })
        }, []);

    const [activeTool, setActiveTool] = useState('');
    const contextValue = {activeTool, setActiveTool}


    const showTool = (name) => {
        const toolNum = name.match(/\d+/);

        (toolNum % 2 == 0)
            ? window.location.href = '#/services'
            : window.location.href = '#/mm-tools2'
    };

    return (
        <div className="App">
            <ActiveToolContext.Provider value={contextValue}>
                <header>
                    <p>Tools Portal</p>
                </header>

                <SideBar categories={categories}/>


                <Main categories={categories}/>

                <footer>
                    Footer
                </footer>
            </ActiveToolContext.Provider>
        </div>
    );
};

export default App;
