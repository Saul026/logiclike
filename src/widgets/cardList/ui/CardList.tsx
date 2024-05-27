import React, { FC, useEffect, useState, useCallback } from 'react';
import classes from './CardList.module.scss';
import { Course, getCourses } from 'shared/api/courses';
import { Card } from 'entities/card/ui/Card';

interface Props {
    activeTag: string;
}

export const CardList: FC<Props> = React.memo(({ activeTag }) => {
    const [courses, setCourses] = useState<Course[]>([]);

    const fetchCourses = useCallback(async () => {
        const res: Course[] = await getCourses();
        setCourses(res);
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    const filteredCourses =
        activeTag === 'Все темы' ? courses : courses.filter((course) => course.tags.includes(activeTag));

    return (
        <div className={classes.cards} style={{ height: filteredCourses.length < 4 ? 'max-content' : 'auto' }}>
            {filteredCourses.map((course) => (
                <Card card={course} key={course.id} />
            ))}
        </div>
    );
});
