import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer le Router
import { DanceCategory } from '../models/dance-category'; // Importez le modèle DanceCategory
import { DanceStyle } from '../models/dance-style';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-stylelist',
  templateUrl: './stylelist.component.html',
  styleUrls: ['./stylelist.component.css']
})
export class StylelistComponent implements OnInit {
  danceStyles: DanceStyle[] = []; // Liste des styles
  danceCategories: DanceCategory[] = []; // Liste des catégories de danse
  updateForm: FormGroup; // Formulaire de mise à jour
  styleIdToUpdate: number | null = null; // ID du style à mettre à jour
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private danceService: DanceService,
    private formBuilder: FormBuilder,
    private router: Router // Ajouter le Router au constructeur
  ) {
    // Initialisation du formulaire avec validation
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      danceCategory: [null, Validators.required] // Ajout d'un champ pour la catégorie
    });
  }

  ngOnInit(): void {
    this.loadDanceStyles(); // Charger la liste des styles de danse
    this.loadDanceCategories(); // Charger la liste des catégories de danse
  }

  // Charger tous les styles de danse
  loadDanceStyles(): void {
    this.danceService.getAllDanceStyles().subscribe(styles => {
      this.danceStyles = styles;
    });
  }

  // Charger toutes les catégories de danse
  loadDanceCategories(): void {
    this.danceService.getAllDanceCategories().subscribe(categories => {
      this.danceCategories = categories; // Remplir la liste des catégories
    });
  }

  // Supprimer un style de danse
  deleteDanceStyle(id: number): void {
    this.danceService.deleteDanceStyle(id).subscribe(() => {
      this.danceStyles = this.danceStyles.filter(style => style.id !== id);
      this.successMessage = 'Style supprimé avec succès !';
    });
  }

  // Pré-remplir le formulaire avec le style sélectionné
  editDanceStyle(style: DanceStyle): void {
    this.styleIdToUpdate = style.id; // Stocker l'ID du style à modifier
    this.updateForm.patchValue({
      name: style.name,
      danceCategory: style.danceCategory.id // Remplir le champ de catégorie avec l'ID
    }); // Pré-remplir le formulaire avec les données du style sélectionné
  }

  // Mettre à jour le style de danse
  updateDanceStyle(): void {
    if (this.updateForm.valid && this.styleIdToUpdate !== null) {
      const selectedCategoryId = this.updateForm.value.danceCategory; // Récupérer l'ID de catégorie

      const updatedStyle: DanceStyle = {
        id: this.styleIdToUpdate,
        name: this.updateForm.value.name,
        danceCategory: { id: selectedCategoryId, name: '' } // Utiliser l'ID de catégorie
      };

      this.danceService.updateDanceStyle(this.styleIdToUpdate, selectedCategoryId, updatedStyle).subscribe(
        () => {
          this.successMessage = 'Style mis à jour avec succès !';
          this.loadDanceStyles(); // Recharger la liste des styles après la mise à jour
          this.styleIdToUpdate = null; // Réinitialiser l'ID du style à mettre à jour
          this.updateForm.reset(); // Réinitialiser le formulaire après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du style :', error);
          this.errorMessage = 'Échec de la mise à jour du style. Veuillez réessayer.';
        }
      );
    }
  }

  // Méthode pour naviguer vers la page d'ajout de style
  navigateToAddStyle(): void {
    this.router.navigate(['/styleadd']);
  }
  navigateToAddStyles(): void {
    this.router.navigate(['/admin']);
  }
}
