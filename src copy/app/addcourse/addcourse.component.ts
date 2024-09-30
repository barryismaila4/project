import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { DanceSchool } from '../models/dance-school';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course: Course = new Course();
  danceSchools: DanceSchool[] = [];
  selectedDanceSchoolId: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private danceService: DanceService) {}

  ngOnInit(): void {
    this.loadDanceSchools();
  }

  loadDanceSchools(): void {
    this.danceService.getAllDanceSchools().subscribe(
      (data: DanceSchool[]) => {
        this.danceSchools = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des écoles de danse.';
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    if (!this.selectedDanceSchoolId) {
      this.errorMessage = 'Veuillez sélectionner une école de danse.';
      return;
    }

    this.danceService.addCourse(this.selectedDanceSchoolId, this.course).subscribe(
      (response: Course) => {
        this.successMessage = 'Cours ajouté avec succès!';
        this.errorMessage = '';
        this.course = new Course(); // Réinitialiser le formulaire
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'ajout du cours.';
        console.error(error);
      }
    );
  }
}
