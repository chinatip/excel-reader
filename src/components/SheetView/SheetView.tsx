import React, { useState } from 'react';
import { Table } from '../../models/Table';
import { Rows } from './Rows';
import { Selector, SelectorProps } from '../Selector/Selector';

interface Props {
    sheet: Table
}

export const SheetView = (props: Props): JSX.Element => {
    if (!props.sheet) return null;

    const [selectedColumns, setSelectedColumns] = useState(null);

    const columnSelectorProps: SelectorProps = {
        list: props.sheet.columns,
        selectedItems: selectedColumns,
        setSelectedItems: setSelectedColumns,
    }

    return (
        <div>
            <Selector {...columnSelectorProps} />
            {Rows(props.sheet.rows, selectedColumns ?? props.sheet.columns)}
        </div>
    )
};