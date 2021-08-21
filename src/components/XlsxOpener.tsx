import React, { useState } from 'react';
import { WorkSheet } from 'xlsx/types';
import { Table } from '../models/Table';
import { getSheets } from '../services/SheetService';
import { SheetSelector } from './SheetSelector';
import { SheetView } from './SheetView';
import * as XLSX from 'xlsx';

export const XlsxOpener = (data: WorkSheet): JSX.Element => {
    const [sheetIndex, setSheetIndex] = useState(0);
    const [uploadedFile, setuploadedFile] = useState(data);
    
    const handleChange = (event: any, value: any): void => {
        setSheetIndex(value);
    };

    const handleUpdateFile = (e: any): void => {
        e.stopPropagation();
        e.preventDefault();
        var files = e.target.files, f = files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var data = new Uint8Array(e.target.result as ArrayBuffer);
            var workbook = XLSX.read(data, {type: 'array'});
            setuploadedFile(workbook);
        };

        reader.readAsArrayBuffer(f);
    };

    const renderTableView = () => {
        const sheets: Table[] = getSheets(uploadedFile);
        if (!sheets || sheets.length < 1) return null;

        return (
            <>
                <SheetSelector sheets={sheets} selectedSheet={sheetIndex} onChange={handleChange}/>
                <SheetView sheet={sheets[sheetIndex]} />
            </>
        )
    }

    return (
        <>
            <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleUpdateFile} />
            {renderTableView()}
        </>
    );
};
