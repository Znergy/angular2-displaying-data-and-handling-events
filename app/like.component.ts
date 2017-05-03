import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <span class="glyphicon glyphicon-heart gi-2x"
    [class.like]="isLiked"
    [class.neutral]="!isLiked"
    (click)="onClick()"></span>
    <span class="like-count">{{ totalLikes }}</span>
  `,
  styles: [
    `
    .glyphicon-heart { cursor: pointer; }
    .gi-2x { font-size: 2em; }
    .like { color: deeppink; }
    .neutral { color: #ccc; }
    .like-count { font-size: 25px;  }
  `]
})

export class LikeComponent {
  @Input() totalLikes: number = 0;
  @Input() isLiked: boolean = false;

  onClick() {
    this.isLiked = !this.isLiked;
    /*** how I did the logic ***/
    // if(this.isLiked) {
    //   this.totalLikes = this.number + 1;
    // } else {
    //   this.totalLikes = this.number - 1;
    // }
    /*** how the instructor did the logic ***/
    this.totalLikes += this.isLiked ? 1 : -1;
  }
}
