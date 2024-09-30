import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Course } from '../models/course'; // Importer le modèle Course
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-usercourse',
  templateUrl: './usercourse.component.html',
  styleUrls: ['./usercourse.component.css']
})
export class UsercourseComponent implements OnInit {
  courses: Course[] = []; // Liste des cours associés à l'école
  schoolId: number = 0; // ID de l'école
  adSeen: boolean = false; // Indicateur pour savoir si la publicité a été vue

  constructor(
    private route: ActivatedRoute,
    private danceService: DanceService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'école à partir de la route
    this.schoolId = Number(this.route.snapshot.paramMap.get('schoolId'));

    // Appel au service pour obtenir les cours basés sur l'ID de l'école
    this.danceService.getCoursesByDanceSchoolId(this.schoolId).subscribe(
      (courses: Course[]) => {
        this.courses = courses; // Assignation des cours récupérés
      },
      (error) => {
        console.error("Erreur lors de la récupération des cours : ", error);
      }
    );
  }

  // Affiche la publicité
  showAd(): void {
    // Logique pour afficher votre popup de publicité
    // Vous pouvez naviguer vers votre composant AdPopup ici
    this.adSeen = true; // Mettre à jour l'état après avoir vu l'annonce
  }

  // Méthode pour vérifier si l'utilisateur peut télécharger
  canDownload(): boolean {
    return this.adSeen;
  }

  // Méthode pour télécharger toutes les coordonnées en TXT
  downloadAsTxt(): void {
    if (!this.canDownload()) {
      this.showAd();
      return;
    }

    const content = this.courses.map(course => 
      `Course Name: ${course.name}\nInstructor: ${course.instructor}\nSchedule: ${course.schedule}\nContent: ${course.contenu}\n\n`
    ).join('');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `courses_school_${this.schoolId}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Méthode pour télécharger toutes les coordonnées en PDF
  downloadAsPdf(): void {
    if (!this.canDownload()) {
      this.showAd();
      return;
    }

    const doc = new jsPDF();
    this.courses.forEach((course, index) => {
      doc.text(`Course Name: ${course.name}`, 10, 10 + (index * 40));
      doc.text(`Instructor: ${course.instructor}`, 10, 15 + (index * 40));
      doc.text(`Schedule: ${course.schedule}`, 10, 20 + (index * 40));
      doc.text(`Content: ${course.contenu}`, 10, 25 + (index * 40));
      if (index < this.courses.length - 1) {
        doc.addPage();
      }
    });
    doc.save(`courses_school_${this.schoolId}.pdf`);
  }

  // Méthode pour télécharger toutes les coordonnées en PNG
  downloadAsPng(): void {
    if (!this.canDownload()) {
      this.showAd();
      return;
    }

    const element = document.createElement('div');
    element.innerHTML = this.courses.map(course => `
      <h1>${course.name}</h1>
      <p>Instructor: ${course.instructor}</p>
      <p>Schedule: ${course.schedule}</p>
      <p>Content: ${course.contenu}</p>
      <hr>
    `).join('');

    document.body.appendChild(element);
    html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `courses_school_${this.schoolId}.png`;
      link.click();
      document.body.removeChild(element);
    });
  }
}
