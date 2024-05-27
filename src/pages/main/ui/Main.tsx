import React, { useCallback, useState } from 'react';
import { CardList } from 'widgets/cardList';
import { TopicList } from 'widgets/topicList';
import classes from './Main.module.scss';

export const Main = React.memo(() => {
    const [activeTag, setActivetag] = useState<string>('Все темы');

    const selectTag = useCallback((outputTag: string) => {
        setActivetag(outputTag);
    }, []);

    return (
        <div className={classes.main}>
            <TopicList activeTag={activeTag} selectTag={selectTag} />
            <CardList activeTag={activeTag} />
        </div>
    );
});
