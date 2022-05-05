import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Wolverine'];
  itemDelete: string = '';
  delete() {
    this.itemDelete = this.heroes.pop() || '';
  }
}
