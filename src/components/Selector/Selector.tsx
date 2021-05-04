import React from 'react';
import './Selector.css';

export interface SelectorProps {
    list: string[];
    selectedItems: string[];
    setSelectedItems: (cols: string[]) => void;
}

export const Selector = (props: SelectorProps) => {
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
        const className = `SelectorContainer__Col 
            ${isSelected ? 'SelectorContainer__Col--active' : ''}`;

        return <div
            key={i}
            className={className}
            onClick={handleSelectCol(col)}>{col}</div>
    };

    return (
        <div className="SelectorContainer">
            {list.map((c, i) => renderCol(c, i))}
        </div>
    );
};