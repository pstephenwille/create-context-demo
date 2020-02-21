import React, {useState} from 'react';
import {render, cleanup} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks'
import SideBar from "./SideBar";
import {ActiveToolProvider} from "../app/app-active-tool-context";

describe.only('SideBar', () => {
    let tools, toolHook;
    const referenceData = JSON.stringify(require('../../json-server/data/tcc-data.json').tools);

    beforeEach(() => {
        toolHook = renderHook(() => useState(JSON.parse(referenceData)));
        tools = toolHook.result.current[0];
    });

    afterEach(() => {
        tools = undefined;
        cleanup();
    });


    test('sidebar', async () => {
        const {getByText} = render(
            <ActiveToolProvider history={{}}>
                <SideBar tools={tools}/>
            </ActiveToolProvider>
        );


        expect(getByText(/Category 01/i)).toBeInTheDocument();
        expect(getByText(/Category 02/i)).toBeInTheDocument();

    });

});
