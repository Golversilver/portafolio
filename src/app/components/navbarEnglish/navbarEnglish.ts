import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarEnglish',
  imports: [],
  templateUrl: './navbarEnglish.html',
  styleUrl: './navbarEnglish.css',
})
export class NavbarEnglish {


  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

}
