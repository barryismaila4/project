import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Corrigé pour correspondre à 'styleUrls'
})
export class AdminComponent {
  constructor(private router: Router) {} // Injecter Router

  // Méthodes pour naviguer vers les différentes pages
  navigateToCategoryAdd(): void {
    this.router.navigate(['/stylelist']); // Naviguer vers categoryadd
  }

  navigateToCategoryList(): void {
    this.router.navigate(['/catlist']); // Naviguer vers catlist
  }
  navigateToCategoryLists(): void {
    this.router.navigate(['/listschool']); // Naviguer vers catlist
  }
  navigateToCategoryListss(): void {
    this.router.navigate(['/listcourse']); // Naviguer vers catlist
  }
}
