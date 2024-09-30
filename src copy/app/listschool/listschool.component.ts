import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router
import { DanceSchool } from '../models/dance-school';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-listschool',
  templateUrl: './listschool.component.html',
  styleUrls: ['./listschool.component.css']
})
export class ListschoolComponent implements OnInit {
  danceSchools: DanceSchool[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private danceService: DanceService, private router: Router) {} // Ajouter Router ici

  ngOnInit(): void {
    this.loadDanceSchools();
  }

  loadDanceSchools(): void {
    this.danceService.getAllDanceSchools().subscribe(
      (data: DanceSchool[]) => {
        this.danceSchools = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des écoles de danse : ' + error.message;
        console.error(this.errorMessage);
      }
    );
  }

  deleteDanceSchool(id: number): void {
    this.danceService.deleteDanceSchool(id).subscribe(
      () => {
        this.successMessage = 'École de danse supprimée avec succès.';
        this.loadDanceSchools();
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la suppression de l\'école de danse : ' + error.message;
        console.error(this.errorMessage);
      }
    );
  }

  // Méthode pour rediriger vers l'ajout d'une école
  goToAddSchool(): void {
    this.router.navigate(['/addschool']); // Rediriger vers le chemin '/addschool'
  }
   // Méthode pour rediriger vers l'ajout d'une école
   goToAddSchools(): void {
    this.router.navigate(['/admin']); // Rediriger vers le chemin '/addschool'
  }
}
