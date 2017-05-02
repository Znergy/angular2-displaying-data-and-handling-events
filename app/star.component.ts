import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: 'app/star.template.html',
  styles: [
  `
  .gi-2x { font-size: 2em; }
  `],
  outputs: ['clicky:favoriteClicky'] // or outputs: ['change', 'clicky']
})

export class StarComponent {
  @Input('is-favorite') isFavorite = false;

  @Output() change = new EventEmitter();
  @Output() clicky = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

  onClicky() {
    this.clicky.emit({ clickyValue: 'working' });
  }
}
