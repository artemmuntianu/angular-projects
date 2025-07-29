import { Course } from "../models/course";

export const COURSES: Course[] = [
    {
        id: 1,
        title: 'Learn Angular from scratch',
        iconUrl: 'assets/angular-icon.png',
        description: 'This course covers all the basics of Angular, including components, services, and routing.',
        lessonsCount: 10,
        category: 'Angular'
    },
    {
        id: 2,
        title: 'Advanced Angular Techniques',
        iconUrl: 'assets/angular-icon.png',
        description: 'Dive deeper into Angular with advanced topics like state management and performance optimization.',
        lessonsCount: 8,
        category: 'Angular'
    },
    {
        id: 3,
        title: 'Introduction to TypeScript',
        iconUrl: 'assets/typescript-icon.png',
        description: 'Learn the fundamentals of TypeScript, a superset of JavaScript that adds static types.',
        lessonsCount: 5,
        category: 'TypeScript'
    }
];