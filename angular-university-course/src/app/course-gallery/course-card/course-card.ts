import { Component, input, output } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {
  public course = input.required<Course>();
  public select = output<Course>();

  public onViewCourseClick() {
    this.select.emit(this.course());
  }

}
