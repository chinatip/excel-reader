import React from 'react';

interface RowsToTextViewProps {
    rows: any[];
    columns: string[];
}

export const RowsToTextView = (props: RowsToTextViewProps): JSX.Element => {
    if (!props || !props.rows || !props.columns) return null;

    const renderRow = (row: any) => {
        const renderField = (field: string) => {
            if (!field) return null;

            return <div dangerouslySetInnerHTML={{__html: field}} />
        };
        const fields = (row: any) => props.columns.map(c => renderField(row[c]));

        return (
            <>
                {fields(row)}
                <br></br>
            </>
        )
    };

    const renderRows = () => props.rows.map(r => renderRow(r));
    
    return (
        <div>
            {renderRows()}
        </div>
    );
};
