import React, { FC, useMemo } from 'react';
import classes from './Topic.module.css';

interface Props {
    outputTag: string;
    selectTag: (outputTag: string) => void;
    activeTag: string;
}

export const Topic: FC<Props> = React.memo(({ activeTag, outputTag, selectTag }) => {
    const buttonStyles = useMemo(
        () => ({
            color: activeTag === outputTag ? 'rgb(255, 255, 255)' : 'rgb(57, 65, 75)',
            backgroundColor: activeTag === outputTag ? 'rgb(95, 191, 119)' : 'rgb(255, 255, 255)',
        }),
        [activeTag, outputTag],
    );

    return (
        <button className={classes.topic} onClick={() => selectTag(outputTag)} style={buttonStyles}>
            {outputTag}
        </button>
    );
});
