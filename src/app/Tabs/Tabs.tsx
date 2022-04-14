import { useState } from "react";
import classes from './tabs.module.css'

export interface TabsProps {
    items: string[],
    initialSelectedIndex?: number,
    renderFn?(item: any): JSX.Element
}

const defaultRenderFn = (item: any) => <span className={classes.tabContent}>{item}</span>

export function Tabs({ items, initialSelectedIndex = 0, renderFn = defaultRenderFn }: TabsProps) {
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)

    return (
        <div className={classes.tabs}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${classes.tab} ${selectedIndex === index ? classes.selected : ''}`}
                    onClick={() => setSelectedIndex(index)}>
                    {renderFn(item)}
                </div>
            ))}
        </div>
    );
}