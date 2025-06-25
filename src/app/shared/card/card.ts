import { Component, input, signal } from '@angular/core';
import { ICards } from '../../core/interface/icards';
import { Button } from '../button/button';

@Component({
  selector: 'nsj-card',
  imports: [Button],
  templateUrl: './card.html',
 
})
export class Card {
  type = input<string>();
  name = input<string>();
  description = input<string>();
  url = input<string>();
}
