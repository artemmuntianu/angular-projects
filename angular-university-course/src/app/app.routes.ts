import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'course-gallery',
        loadComponent: () => import('./course-gallery/course-gallery').then(m => m.CourseGallery)
    },
    {
        path: 'image-gallery',
        loadComponent: () => import('./image-gallery/image-gallery').then(m => m.ImageGallery)
    }
];
