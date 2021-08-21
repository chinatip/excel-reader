import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { Table } from '../../models/Table';

interface SheetSelectorProps {
    sheets: Table[];
    selectedSheet: Number;
    onChange: (event: any, value: any) => void;    
}

export const SheetSelector = (props: SheetSelectorProps): JSX.Element => {
    const renderSheetNames = () => props.sheets.map(s => <Tab label={s.name} />)

    return (
        <AppBar position="static">
            <Tabs value={props.selectedSheet} onChange={props.onChange} aria-label="simple tabs example">
                {renderSheetNames()}
            </Tabs>
        </AppBar>
    );
};
