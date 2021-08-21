import Chip from '@material-ui/core/Chip/Chip';
import React from 'react';

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

    const renderCol = (col: string, i: number) => {
        const isSelected = selectedItems && selectedItems.includes(col);
        
        const chipVariant = isSelected ? 'outlined' : 'outlined';
        const chipColor = isSelected ? 'primary' : 'default';
        return <Chip label={col} variant={chipVariant} color={chipColor} onClick={handleSelectCol(col)} />;
    };

    return (
        <div className="SelectorContainer">
            {list.map((c, i) => renderCol(c, i))}
        </div>
    );
};