import React from 'react';
import {ActiveToolConsumer} from '../app/app-active-tool-context';
import Drawer from "../common/drawer/Drawer";
import IconPlaceholder from "../common/IconPlaceholder";

export default (props) => {
    const makeToolLinks = (items, idx, clickHandler) => {
        return (
            <Drawer key={'drawer-' + idx} id={'drawer-' + idx} title={items.category.name}>
                {
                    items.category.tools.map((tool, idx) => {
                        return (
                            <div key={'tool-' + idx}>
                                <div className={'side-bar-row'}
                                     onClick={(evt) => {
                                         evt.stopPropagation();
                                         clickHandler(tool.name)
                                     }}>
                                    <IconPlaceholder/>

                                    <p>{tool.name}</p>
                                </div>
                                {
                                    tool.links &&
                                    makeSubToolLinks(tool, clickHandler)

                                }
                            </div>
                        );
                    })
                }
            </Drawer>
        )
    };

    const makeSubToolLinks = (items, clickHandler) => {
        return items.links.map((link, idx) => {
            return (
                <div className={'side-bar-row sub-nav-border'}
                     key={'link-' + idx} onClick={(evt) => {
                    evt.stopPropagation();
                    clickHandler(link)
                }}>
                    <p className={'sub-nav-link'}>{link}</p>
                </div>
            )
        })
    };

    return (
        <ActiveToolConsumer>
            {({activeTool, changeActiveTool}) => {
                return (
                    <section id={'sideBar'}>
                        {
                            props.tools &&
                            props.tools.map((cat, idx) => {
                                return makeToolLinks(cat, idx, changeActiveTool)
                            })
                        }
                    </section>
                )
            }
            }
        </ActiveToolConsumer>
    )
}
