import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCard } from "./course-card/course-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public readonly title = signal('angular-university-course');
  
  public handleChangeTitle(): void {
    let newTitle = prompt('Change title', this.title());
    if (newTitle === null || newTitle.trim() === '')
      return;
    this.title.set(newTitle);
  }
}
