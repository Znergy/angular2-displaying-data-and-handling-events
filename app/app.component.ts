import { Component } from '@angular/core';
import { LikeComponent } from './like.component';

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
      <button class="btn btn-primary"(click)="doSomething($event)">Click Me</button>
    </div>
    <h3>Two-way binding</h3>
    <div>
      <!-- <input type="text" [value]="title2" (input)="title2 = $event.taget.value"> -->
      <input type="text" [(ngModel)]="title2">
      <input type="button" (click)="title2 = ''" value="Clear">
      <p>Two way binding: {{ title2 }}</p>
    </div>
    <div class="well">
      <h3>Challenge: Build a favorite star</h3>
      <h6>First star, changes color on click</h6>
      <span [class.change-color]="isClassVisible" (click)="isClassVisible = !isClassVisible" class="glyphicon glyphicon-star-empty gi-2x"></span>
      <h6>Second star, fills center on click</h6>
      <span (click)="starClass = 'glyphicon glyphicon-star gi-2x'" class="{{ starClass }}"></span>
      <h6>Third star, fills and emptys on click</h6>
      <span (click)="isStarFilled = !isStarFilled" [class]="fillStar(isStarFilled)"></span>
      <h6>Star Component</h6>
      <!-- Base Class, property binding, click event binding -->
      <span class="glyphicon gi-2x" [class.glyphicon-star-empty]="!isFavorite" [class.glyphicon-star]="isFavorite" (click)="onClick()"></span>
      <favorite-star [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite-star>
    </div>
    <div class="well">
      <like [totalLikes]="tweet.totalLikes" [isLiked]="tweet.isLiked"></like>
    </div>
  `,
  styles: [
  `
  .change-color { color: red; }
  .gi-2x { font-size: 2em; }

  `]
})
export class AppComponent {
  post = {
    title: 'title',
    isFavorite: true
  }

  tweet = {
    totalLikes: 10,
    isLiked: false
  }

  onFavoriteChange($event) {
    console.log($event);
  }



  starClass = "glyphicon glyphicon-star-empty gi-2x";
  title = "Created using property binding and interporlation";
  title2 = "Angular App";
  imageURL = "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg";
  isActive = true;
  isClassVisible = false;
  isStarFilled = false;
  isFavorite = false;

  // super cool trick here.. !this.isFavorite always sets it to the opposite (very cool)
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  // due to both the div and the button having a click event attached, when you click the button it triggers both events. To stop this we can say '$event.stopPropagation()'
  doSomething($event) {
    $event.stopPropagation();
    console.log("Clicked!", $event);
  }

  fillStar(isStarFilled) {
    if(isStarFilled) {
      return "glyphicon glyphicon-star gi-2x";
    } else {
      return "glyphicon glyphicon-star-empty gi-2x";
    }
  }

  onDivClick() {
    console.log("handled by div");
  }
}
