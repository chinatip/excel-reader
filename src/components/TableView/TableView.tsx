import React, { useState } from 'react';
import { Table } from '../../models/Table';
import { Rows } from './Rows';
import { Selector, SelectorProps } from '../Selector/Selector';

export const TableView = (table: Table): JSX.Element => {
    if (!table) return null;

    const [selectedColumns, setSelectedColumns] = useState(null);

    const columnSelectorProps: SelectorProps = {
        list: table.columns,
        selectedItems: selectedColumns,
        setSelectedItems: setSelectedColumns,
    }

    return (
        <div>
            <Selector {...columnSelectorProps} />
            {Rows(table.rows, selectedColumns ?? table.columns)}
        </div>
    )
};