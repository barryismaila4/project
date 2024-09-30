import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router
import { Course } from '../models/course';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {
  courses: Course[] = [];
  errorMessage: string = '';

  constructor(private danceService: DanceService, private router: Router) {} // Injecter Router

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.danceService.getAllCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des cours.';
        console.error(error);
      }
    );
  }

  deleteCourse(courseId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      this.danceService.deleteCourse(courseId).subscribe(
        () => {
          this.courses = this.courses.filter(course => course.id !== courseId);
        },
        (error) => {
          this.errorMessage = 'Erreur lors de la suppression du cours.';
          console.error(error);
        }
      );
    }
  }

  // Méthode pour rediriger vers la page d'ajout de cours
  goToAddCourse(): void {
    this.router.navigate(['/addcourse']); // Rediriger vers '/addcourse'
  }

  // Méthode pour revenir à la page d'administration
  goToAdmin(): void {
    this.router.navigate(['/admin']); // Rediriger vers '/admin'
  }
}
