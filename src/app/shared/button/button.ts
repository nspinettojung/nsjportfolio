import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'nsj-button',
  imports: [NgClass],
  templateUrl: './button.html',
  
})
export class Button {
  text = input<string>('');
  bClass = input<string | string[]>('');
  href = input<string>('');
}
