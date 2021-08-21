import React, { useState } from 'react';
import { Table } from '../models/Table';
import { RowsToTextView } from './RowsToTextView';
import { ColumnSelector, ColumnSelectorProps } from './ColumnSelector';

interface Props {
    sheet: Table
}

export const SheetView = (props: Props): JSX.Element => {
    if (!props.sheet) return null;

    const [selectedColumns, setSelectedColumns] = useState(props.sheet.columns);

    const columnSelectorProps: ColumnSelectorProps = {
        list: props.sheet.columns,
        selectedItems: selectedColumns,
        setSelectedItems: setSelectedColumns,
    }

    return (
        <div>
            <ColumnSelector {...columnSelectorProps} />
            <RowsToTextView rows={props.sheet.rows} columns={selectedColumns} />
        </div>
    )
};