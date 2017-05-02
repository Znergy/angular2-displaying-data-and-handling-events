import { Component } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <span class="glyphicon glyphicon-heart gi-2x"
    [class.like]="isLiked"
    [class.neutral]="!isLiked"
    (click)="onClick()"></span>
    <span class="like-count">{{ number }}</span>
  `,
  styles: [
    `
    .gi-2x { font-size: 2em; }
    .like { color: deeppink; cursor: pointer; }
    .neutral { color: #ccc; }
    .like-count { font-size: 25px;  }
  `]
})

export class LikeComponent {
  number: number = 10;
  isLiked: boolean = false;

  onClick() {
    this.isLiked = !this.isLiked;
    if(this.isLiked) {
      this.number = this.number + 1;
    } else {
      this.number = this.number - 1;
    }
  }
}
