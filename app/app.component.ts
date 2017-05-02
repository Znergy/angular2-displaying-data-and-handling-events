import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <messages></messages>
    <h1>{{ title }}</h1>
    <h1 [textContent]="title"></h1>
    <!-- <img src="{{ imageURL }}" />
    <img [src]="imageURL" />
    <img bind-src="imageURL" /> -->
    <h3>Property binding</h3>
    <button class="btn btn-primary" [class.active]="isActive">Submit</button>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
    <h3>Click events</h3>
    <div (click)="onDivClick()">
      <button (click)="doSomething($event)">Click Me</button>
    </div>
    <h3>Two-way binding</h3>
    <div>
      <!-- <input type="text" [value]="title2" (input)="title2 = $event.taget.value"> -->
      <input type="text" [(ngModel)]="title2">
      <input type="button" (click)="title2 = ''" value="Clear">
      <p>Two way binding: {{ title2 }}</p>
    </div>
  `
})
export class AppComponent {
  title = "Created using property binding and interporlation";
  title2 = "Angular App";
  imageURL = "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg";
  isActive = true;

  // due to both the div and the button having a click event attached, when you click the button it triggers both events. To stop this we can say '$event.stopPropagation()'
  doSomething($event) {
    $event.stopPropagation();
    console.log("Clicked!", $event);
  }

  onDivClick() {
    console.log("handled by div");
  }
}
