import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public readonly title = signal('angular-university-course');
  
  public onTitleChange(): void {
    let newTitle = prompt('Change title', this.title());
    if (newTitle === null || newTitle.trim() === '')
      return;
    this.title.set(newTitle);
  }

}
