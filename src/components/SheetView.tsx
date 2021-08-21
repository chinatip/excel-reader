import React, { useState, useEffect } from 'react';
import { Table } from '../models/Table';
import { RowsToTextView } from './RowsToTextView';
import { RowsToText } from './RowsToText';
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
    }

    return (
        <div>
            <ColumnSelector {...columnSelectorProps} />
            <div style={{ margin: '20px', padding: '40px', border: '2px solid RED' }}>
                <RowsToText rows={props.sheet.rows} columns={selectedColumns} />
            </div>
            <div style={{ margin: '20px', padding: '40px', border: '2px solid black' }}>
                <RowsToTextView rows={props.sheet.rows} columns={selectedColumns} />
            </div>
        </div>
    )
};