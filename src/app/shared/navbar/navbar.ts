import { Component } from '@angular/core';
import { Button } from '../button/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'nsj-navbar',
  imports: [ NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  links = [
    {
      text: 'Home',
      link: '/home',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Skills',
      link: '/skills',
    },
    {
      text: 'Projects',
      link: '/projects',
    },
  ];

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
