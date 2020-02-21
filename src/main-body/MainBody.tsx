import React, {useContext} from 'react';
import {ActiveToolConsumer, AppActiveToolContext} from "../app/app-active-tool-context";

import Home from "../mm-tool-1/home/Home";
import Home2 from "../mm-tool-2/home/Home2";
import HeaderNav from "../app/AppHeaderNav";
import IconPlaceholder from "../common/IconPlaceholder";

export default (props) => {
    const {activeTool} = useContext(AppActiveToolContext);
    const switchTool = () => {
        if (activeTool.match(/service/i)) {
            return (<Home history={props.history}/>);
        }

        if (activeTool.match(/mm-tools2/i)) {
            return (<Home2 history={props.history}/>);
        }


        return props.tools.map((cat, idx) => {
            return (
                <div key={'cat-' + idx} className={'tool-category'}>
                    <h1 className={'title-m--bold'}>{cat.category.name}</h1>
                    <div className={'tool-category__tools border'}>
                            {
                                cat.category.tools.map((tool, idx) => {
                                    return (
                                        <div className={'tool-category__tools__tool'} key={'tool-' + idx}>
                                            <IconPlaceholder/>
                                            <div className={'flex-colx'}>
                                                <p className={'title-m'}>{tool.name}</p>
                                                <p>{tool.description}</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            )
        });
    };

    return (
        <ActiveToolConsumer>
            {({activeTool}) => {
                return (
                    <div>
                        <HeaderNav/>

                        <main>
                            {
                                switchTool()
                            }
                        </main>
                    </div>
                )
            }}

        </ActiveToolConsumer>
    )
}
