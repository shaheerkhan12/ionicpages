import { Component, Input, Output, EventEmitter } from '@angular/core';

enum COLORS {
Orange = '#FFCA28',
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  names = [ { name: 'danish', pos: 'developer', url: '../../assets/person.jpg'},
  { name: 'shaheer', pos: 'developer', url: '../../assets/best.jpg'},
  { name: 'usman', pos: 'developer', url: '../../assets/person1.jpg'},
{name: 'usman', pos: 'developer', url: '../../assets/img_avatar1.png'}];
  rating = 4 ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

getColor(index: number) {
  // tslint:disable-next-line: no-unused-expression
  this.rating;
  this.ratingChange.emit(this.rating);
  if (this.isAboveRating(index)) {
      return COLORS.Orange;
    }
  }

isAboveRating(index: number): boolean {
 return index < this.rating;
}

}
