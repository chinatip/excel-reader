import React from 'react';

export const Rows = (rows: any[], columns: string[]): JSX.Element => {
    if (!rows || !columns) return null;

    const renderRow = (row: any) => {
        const renderField = (field: string) => {
            if (!field) return null;

            return <div dangerouslySetInnerHTML={{__html: field}} />
        };
        const fields = (row: any) => columns.map(c => renderField(row[c]));

        return (
            <>
                {fields(row)}
                <br></br>
            </>
        )
    };

    const renderRows = () => rows.map(r => renderRow(r));
    
    return (
        <div>
            {renderRows()}
        </div>
    );
};