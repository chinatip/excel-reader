import Chip from '@material-ui/core/Chip/Chip';
import React, { useEffect } from 'react';

export interface ColumnSelectorProps {
    list: string[];
    selectedItems: string[];
    setSelectedItems: (cols: string[]) => void;
}

export const ColumnSelector = (props: ColumnSelectorProps) => {
    if (!props || !props.list) return null;
    const { list, selectedItems, setSelectedItems } = props;

    const handleSelectCol = (col: string) => () => {
        let updateCols: string[] = selectedItems ? [...selectedItems] : [];
        if (!selectedItems) {
            updateCols = [col]
        } else {
            if (updateCols.includes(col)) {
                const index = updateCols.indexOf(col);
                if (index > -1) {
                    updateCols.splice(index, 1);
                }
            } else {
                updateCols.push(col);
            }
        }
        
        setSelectedItems(updateCols);
    };

    const handleSelectAll = () => setSelectedItems(props.list);
    const handleSelectNone = () => setSelectedItems(null);

    const renderCol = (col: string) => {
        const isSelected = selectedItems && selectedItems.includes(col);
        
        const chipVariant = isSelected ? 'outlined' : 'outlined';
        const chipColor = isSelected ? 'primary' : 'default';
        return (
            <>
                <Chip label={col} variant={chipVariant} color={chipColor} onClick={handleSelectCol(col)} />
                &nbsp;
            </>
        );
    };

    return (
        <div>
            <br/>
            <Chip label="Select All" color="primary" onClick={handleSelectAll} />&nbsp;
            <Chip label="Select None" color="secondary" onClick={handleSelectNone} />
            <br/><br/>
            {list.map(c => renderCol(c))}
        </div>
    );
};