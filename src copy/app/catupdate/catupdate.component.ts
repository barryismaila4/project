import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanceCategory } from '../models/dance-category'; // Assurez-vous que le chemin est correct
import { DanceService } from '../services/dance-service.service'; // Assurez-vous que le chemin est correct
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catupdate',
  templateUrl: './catupdate.component.html',
  styleUrls: ['./catupdate.component.css']
})
export class CatupdateComponent implements OnInit {
  categoryForm: FormGroup; // Formulaire pour la mise à jour
  categoryId: number = 0; // Initialisé à 0 par défaut
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private danceService: DanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required] // Validation pour le nom de la catégorie
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie depuis les paramètres de l'URL
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDanceCategory(); // Charger la catégorie à mettre à jour
  }

  getDanceCategory(): void {
    this.danceService.getDanceCategoryById(this.categoryId).subscribe(
      (category) => {
        this.categoryForm.patchValue(category); // Remplir le formulaire avec les données de la catégorie
      },
      (error) => {
        console.error('Erreur lors de la récupération de la catégorie de danse:', error);
        this.errorMessage = 'Échec du chargement de la catégorie.';
      }
    );
  }

  updateDanceCategory(): void {
    if (this.categoryForm.valid) {
      const updatedCategory: DanceCategory = {
        id: this.categoryId,
        name: this.categoryForm.value.name
      };

      this.danceService.updateDanceCategory(this.categoryId, updatedCategory).subscribe(
        () => {
          this.successMessage = 'Catégorie mise à jour avec succès !';
          this.router.navigate(['/category-crud']); // Rediriger vers la liste après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la catégorie:', error);
          this.errorMessage = 'Échec de la mise à jour de la catégorie. Veuillez réessayer.';
        }
      );
    }
  }
}
