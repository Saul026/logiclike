import { apiInstance } from '../base';

import { Course } from './types';

const BASE_URL = 'https://logiclike.com/docs/courses.json';

export const getCourses = (): Promise<Course[]> => {
    return apiInstance.get(`${BASE_URL}`);
};
