import { Topic } from 'widgets/topic/ui/Topic';
import classes from './TopicList.module.css';
import React, { FC } from 'react';
import { topicsArray } from 'shared/const/TopicsArray';

interface Props {
    activeTag: string;
    selectTag: (outputTag: string) => void;
}

export const TopicList: FC<Props> = React.memo(({ activeTag, selectTag }) => {
    return (
        <div className={classes.topics}>
            <Topic outputTag='Все темы' selectTag={selectTag} activeTag={activeTag} />
            {topicsArray.map((tag) => (
                <Topic outputTag={tag} selectTag={selectTag} activeTag={activeTag} key={tag} />
            ))}
        </div>
    );
});
