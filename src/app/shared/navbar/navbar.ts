import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { NgClass } from '@angular/common';
import { ILinks } from '../../core/interface/ilinks';
import {
  Router,
  RouterLink,
  Event as RouterEvent,
  Scroll,
} from '@angular/router';

@Component({
  selector: 'nsj-navbar',
  imports: [NgClass, Button, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  links = input<ILinks[]>([
    {
      text: 'About',
      link: '/about',
      fragmentL: 'about',
    },
    {
      text: 'Skills',
      link: '/skills',
      fragmentL: 'skills',
    },
    {
      text: 'Projects',
      link: '/projects',
      fragmentL: 'projects',
    },
    {
      text: 'Contact',
      link: '/contact',
      fragmentL: 'contact',
    },
  ]);

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      if (e instanceof Scroll && e.anchor) {
        setTimeout(() => {
          const el = document.getElementById(e.anchor!);
          if (el) {
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.scrollY - 64, // offset de 64px
              behavior: 'smooth',
            });
          }
        });
      }
    });
  }
}
