import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  constructor(private dbzService: DbzService) {}
  @Input() newCharacter: Character = { name: '', power: 0 };
  /* @Output() addCharacter: EventEmitter<Character> = new EventEmitter();
   */
  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCharacter(this.newCharacter);
    /* this.addCharacter.emit(this.newCharacter); */
    this.newCharacter = { name: '', power: 0 };
  }
}
