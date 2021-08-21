import Button from '@material-ui/core/Button/Button';
import React, { useState, useEffect } from 'react';
import { Table } from '../models/Table';
import { ColumnSelector, ColumnSelectorProps } from './ColumnSelector';

interface Props {
    sheet: Table
}

export const SheetView = (props: Props): JSX.Element => {
    if (!props || !props.sheet) return null;

    const [selectedColumns, setSelectedColumns] = useState(props.sheet.columns);

    useEffect(() => {
        setSelectedColumns(props.sheet.columns);
    }, [props.sheet]);

    const columnSelectorProps: ColumnSelectorProps = {
        list: props.sheet.columns,
        selectedItems: selectedColumns,
        setSelectedItems: setSelectedColumns,
    };

    const copyToClipBoard = () => navigator.clipboard.writeText(getText());

    const getText = (): string => {
        if (!props || !props.sheet.rows || !props.sheet.columns) return null;
        
        const columns = selectedColumns ?? props.sheet.columns;
        const renderRow = (row: any): string => {
            let text = '';
            const renderField = (field: string): string => !field ? '' : field + String.fromCharCode(13, 10);
            columns.forEach(c => text += renderField(row[c]));
    
            return text + String.fromCharCode(13, 10);
        };
    

        let text = '';
        props.sheet.rows.forEach(r => text += renderRow(r));

        return text;
    };

    const renderTextArea = () => (
        <textarea
            value={getText()}
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
        />
    );
    

    return (
        <>
            <ColumnSelector {...columnSelectorProps} />
            <div style={{ textAlign: 'center', padding: '10px' }}>
                <Button variant="contained" color="primary" size="large" onClick={copyToClipBoard}>Copy</Button>
            </div>
            <div style={{ margin: '10px', padding: '10px', border: '2px solid red' }}>
                {renderTextArea()}
            </div>
        </>
    )
};