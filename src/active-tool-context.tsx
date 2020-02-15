import React, {useState} from 'react';

export const ActiveToolContext = React.createContext({
    activeTool: '',
    setActiveTool: () => {
    }
});
