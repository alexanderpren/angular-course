import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;
  get nameUpper(): string {
    return this.name.toUpperCase();
  }

  getFullName(): string {
    return `${this.name} is ${this.age} years old`;
  }
  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 35;
  }
}
