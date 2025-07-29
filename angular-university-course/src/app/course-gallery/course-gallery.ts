import { Component } from '@angular/core';
import { COURSES } from './data/courses';
import { Course } from './models/course';
import { CourseCard } from "./course-card/course-card";

@Component({
  selector: 'app-course-gallery',
  imports: [CourseCard],
  template: `
    <div class="courses">
      <h1 style="text-align: center;">Available Courses</h1>
      @for (course of courses; track $index) {
          <course-card [course]="course" (select)="onCourseSelect($event)" />
      }
    </div>
  `
})
export class CourseGallery {

  public readonly courses = COURSES;

  public onCourseSelect(course: Course): void {
    console.log('Selected course:', course);
  }

}
