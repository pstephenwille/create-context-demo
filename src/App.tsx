import React, {useEffect, useState} from 'react';
import { createHashHistory } from 'history';
import './App.scss';
import SideBar from "./side-bar/SideBar";
import axios from 'axios';
import Main from "./main/Main";
import {ActiveToolProvider} from "./active-tool-context";

const App = () => {
    const history = createHashHistory();
    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:3001/v2/tools').then(resp => {
                setCategories(resp['data']['tools']);
            })
        }, []);




    return (
        <div className="App">
            <ActiveToolProvider history={history}>
                <header>
                    <p>Tools Portal</p>
                </header>

                <SideBar categories={categories} history={history}/>


                <Main categories={categories} hitory={history}/>

                <footer>
                    Footer
                </footer>
            </ActiveToolProvider>
        </div>
    );
};

export default App;
