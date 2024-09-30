import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-updcourse',
  templateUrl: './updcourse.component.html',
  styleUrls: ['./updcourse.component.css']
})
export class UpdcourseComponent implements OnInit {
  course: Course = new Course();
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private danceService: DanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.params['id'];
    this.loadCourse(courseId);
  }

  loadCourse(courseId: number): void {
    this.danceService.getCourseById(courseId).subscribe(
      (data: Course) => {
        this.course = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement du cours.';
        console.error(error);
      }
    );
  }

  updateCourse(): void {
    this.danceService.updateCourse(this.course.id, this.course.danceSchool.id, this.course).subscribe(
      () => {
        this.successMessage = 'Cours mis à jour avec succès.';
        this.router.navigate(['/listcourse']); // Redirection vers la liste des cours
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la mise à jour du cours.';
        console.error(error);
      }
    );
  }
}
