import { Component, input, signal } from "@angular/core";

@Component({
  selector: "app-image-gallery",
  template: `
    <div class="image-gallery">
        @for (link of links(); track $index) {
            <div class="image">
                <img src="{{ link }}" alt="Gallery image {{$index + 1}}">
                <button class="remove" (click)="onRemoveLink($index)">×</button>
            </div>
        }
    </div>
  `,
  styleUrl: './image-gallery.scss'
})
export class ImageGallery {

    links = signal<string[]>([
        "https://dummyimage.com/300/09f/fff.png?text=Image+1",
        "https://dummyimage.com/300/09f/fff.png?text=Image+2",
        "https://dummyimage.com/300/09f/fff.png?text=Image+3" 
    ]);

    onRemoveLink(index: number) {
        this.links().splice(index, 1);
    }

}