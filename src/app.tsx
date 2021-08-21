import React, { useState } from 'react';
import { WorkSheet } from 'xlsx/types';

import { Table } from './models/Table';
import { SheetView } from './components/SheetView/SheetView';
import { getSheets } from './services/SheetService';
import { SheetSelector } from './components/SheetSelector/SheetSelector';

export const App = (data: WorkSheet): JSX.Element => {
    const [sheetIndex, setSheetIndex] = useState(0);
    
    const sheets: Table[] = getSheets(data);
    const handleChange = (event: any, value: any): void => {
        setSheetIndex(value);
    };

    return (
        <>
            <SheetSelector sheets={sheets} selectedSheet={sheetIndex} onChange={handleChange}/>
            <SheetView sheet={sheets[sheetIndex]} />
        </>
    );
};
