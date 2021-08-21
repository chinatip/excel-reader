import * as XLSX from 'xlsx';
import { WorkSheet } from 'xlsx/types';
import { Sheet, Table } from '../models/Table';

const getSheetName = (data: WorkSheet): string[] => data.SheetNames;
const getSheet = (data: WorkSheet, name: string): Sheet => data.Sheets[name];
const getSheetJson = (sheet: Sheet, opts?: XLSX.Sheet2JSONOpts): unknown[] =>
    XLSX.utils.sheet_to_json(sheet, opts);

const getColumnNames = (sheet: Sheet): string[] => {
    const cols = getSheetJson(sheet, { header: 1 });
    const header: any = cols ? cols[0] : [];
    return header;
};

const getSheetData = (data: WorkSheet, name: any): Table => {
    const sheet = getSheet(data, name);
    if (sheet) {
        const rows = getSheetJson(sheet);
        const columns = getColumnNames(sheet);
    
        return { name, columns, rows };
    }

    return null;
};

export const getSheets = (data: WorkSheet): Table[] => {
    if (!data) return null;
    
    const sheetNames = getSheetName(data);

    return (sheetNames ?? []).map(s => getSheetData(data, s));
};