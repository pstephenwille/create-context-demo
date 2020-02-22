import React, {useEffect, useState} from 'react';
import {createHashHistory} from 'history';
import SideBar from "../side-bar/SideBar";
import axios from 'axios';
import MainBody from "../main-body/MainBody";
import {ActiveToolProvider} from "./app-active-tool-context";
import IconPlaceholder from "../common/IconPlaceholder";
import ExampleComponent from 'rollup-test';

const App = () => {
console.log('...rollup ', ExampleComponent);
    const history = createHashHistory();
    const [tools, setTools] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:3001/v2/tools').then(resp => {
                setTools(resp['data']);
            })
        }, []);

    return (
        <div id="App">
            <ActiveToolProvider history={history}>
                    <div id={'left-panel'}>
                        <div className={'header-side-bar-row'}>
                            <div className={'menu-icon'}>
                                <div className={'line'}/>
                                <div className={'line'}/>
                                <div className={'line'}/>
                            </div>
                            <h1 className={'title-l'}>Tools Portal</h1>
                            <ExampleComponent text={'woot'}/>
                        </div>

                        <div id={'dashboard'} className={'side-bar-row'}>
                            <IconPlaceholder/>
                            <h3 className={'title-m'}>Dashboard</h3>
                        </div>

                        <SideBar tools={tools} history={history}/>
                    </div>


                    <MainBody tools={tools} hitory={history}/>

                <footer>
                    Footer
                </footer>

            </ActiveToolProvider>


        </div>
    );
};
export default App;
