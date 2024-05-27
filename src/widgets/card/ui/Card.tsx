import React, { FC } from 'react';
import classes from './Card.module.css';
import { Course } from 'shared/api/courses';

interface Props {
    card: Course;
}

export const Card: FC<Props> = React.memo(({ card }) => {
    return (
        <div className={classes.card}>
            <div className={classes['img-container']} style={{ backgroundColor: card.bgColor }}>
                <img src={card.image} alt='card-image' className={classes.img} />
            </div>
            <p>{card.name}</p>
        </div>
    );
});
