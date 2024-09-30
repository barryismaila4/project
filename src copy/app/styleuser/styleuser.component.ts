import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DanceStyle } from '../models/dance-style';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-styleuser',
  templateUrl: './styleuser.component.html',
  styleUrls: ['./styleuser.component.css']
})
export class StyleuserComponent implements OnInit {
  styles: DanceStyle[] = [];
  categoryId: number | null = null;
  errorMessage: string = '';

  constructor(private danceService: DanceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Récupération de l'ID de la catégorie à partir de la route
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    
    if (this.categoryId) {
      this.getStylesByCategoryId(this.categoryId);
    }
  }

  getStylesByCategoryId(categoryId: number): void {
    this.danceService.getDanceStylesByCategoryId(categoryId).subscribe(
      (styles) => {
        this.styles = styles;
        if (styles.length === 0) {
          this.errorMessage = 'No styles found for this category';
        }
      },
      (error) => {
        console.error('Error fetching dance styles:', error);
        this.errorMessage = 'Failed to load dance styles.';
      }
    );
  }

  // Nouvelle méthode pour naviguer vers les écoles associées à ce style
  navigateToSchools(styleId: number): void {
    this.router.navigate([`public/style/${styleId}/schools`]);
  }
}
