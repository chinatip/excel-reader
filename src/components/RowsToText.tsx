import React from 'react';

interface RowsToTextProps {
    rows: any[];
    columns: string[];
}

export const RowsToText = (props: RowsToTextProps): JSX.Element => {
    if (!props || !props.rows || !props.columns) return null;

    const renderRow = (row: any): string => {
        let text = '';
        const renderField = (field: string): string => !field ? '' : field + String.fromCharCode(13, 10);
        props.columns.forEach(c => text += renderField(row[c]));

        return text + String.fromCharCode(13, 10);
    };

    const getText = (): string => {
        let text = '';
        props.rows.forEach(r => text += renderRow(r));

        return text;
    };
    
    return (
        <textarea
            value={getText()}
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
        />
    );
};
