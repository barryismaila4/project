import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { DanceCategory } from '../models/dance-category';
import { DanceStyle } from '../models/dance-style';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-styleadd',
  templateUrl: './styleadd.component.html',
  styleUrls: ['./styleadd.component.css']
})
export class StyleaddComponent implements OnInit {
  styleForm: FormGroup;
  danceCategories: DanceCategory[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private danceService: DanceService,
    private router: Router // Ajouter Router ici
  ) {
    this.styleForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getDanceCategories();
  }

  getDanceCategories(): void {
    this.danceService.getAllDanceCategories().subscribe(
      (categories) => {
        this.danceCategories = categories;
      },
      (error) => {
        console.error('Erreur lors du chargement des catégories:', error);
        this.errorMessage = 'Échec du chargement des catégories.';
      }
    );
  }

  onSubmit(): void {
    if (this.styleForm.valid) {
      const style: DanceStyle = {
        id: 0,
        name: this.styleForm.value.name,
        danceCategory: {
          id: this.styleForm.value.categoryId,
          name: '',
        }
      };

      this.danceService.addDanceStyle(style.danceCategory.id, style).subscribe(
        () => {
          this.successMessage = 'Style ajouté avec succès!';
          this.styleForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du style:', error);
          this.errorMessage = 'Échec de l\'ajout du style. Vérifiez la console pour plus d\'informations.';
        }
      );
    } else {
      console.warn('Le formulaire n\'est pas valide:', this.styleForm.errors);
    }
  }

  // Méthode pour revenir à la liste des styles
  goToStyleList(): void {
    this.router.navigate(['/stylelist']); // Rediriger vers le chemin '/stylelist'
  }
}
