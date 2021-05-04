import React from 'react';
import { TableView } from './components/TableView/TableView';
import { Table } from './models/Table';
import { getSheets } from './services/TableReader';

import { WorkSheet } from 'xlsx/types';

export const App = (data: WorkSheet): JSX.Element => {
    const sheets: Table[] = getSheets(data);

    return TableView(sheets[0]);
};
