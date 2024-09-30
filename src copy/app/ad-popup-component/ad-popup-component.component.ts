import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-popup-component',
  templateUrl: './ad-popup-component.component.html',
  styleUrl: './ad-popup-component.component.css'
})
export class AdPopupComponentComponent {
  constructor(private router: Router) {}

  closeAd(): void {
    // Fermer la publicité et retourner à la page précédente
    this.router.navigate(['..']);
  }

  proceedToDownload(): void {
    // Logique pour permettre le téléchargement après avoir regardé la publicité
    this.closeAd();
    alert("You can now proceed to download your files.");
    // Ici, vous pouvez appeler votre méthode de téléchargement
  }
}