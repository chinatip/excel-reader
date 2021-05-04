export interface Sheet {
    name: string;
    table: Table;
}

export interface Table {
    name: string;
    columns: string[];
    rows: any[];
}
