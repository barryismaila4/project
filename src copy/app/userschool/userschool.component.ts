import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DanceSchool } from '../models/dance-school'; // Importer le modèle DanceSchool
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-userschool',
  templateUrl: './userschool.component.html',
  styleUrls: ['./userschool.component.css']
})
export class UserschoolComponent implements OnInit {
  danceSchools: DanceSchool[] = []; // Liste des écoles associées au style
  styleId: number = 0; // ID du style

  constructor(
    private route: ActivatedRoute,
    private danceService: DanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du style à partir de la route
    this.styleId = Number(this.route.snapshot.paramMap.get('styleId'));

    // Appel au service pour obtenir les écoles basées sur l'ID du style
    this.danceService.getDanceSchoolsByStyleId(this.styleId).subscribe(
      (schools: DanceSchool[]) => {
        this.danceSchools = schools;
      },
      (error) => {
        console.error("Erreur lors de la récupération des écoles : ", error);
      }
    );
  }

  // Méthode pour naviguer vers les cours associés à une école
  navigateToCourses(schoolId: number): void {
    this.router.navigate([`public/school/${schoolId}/courses`]);
  }
}
