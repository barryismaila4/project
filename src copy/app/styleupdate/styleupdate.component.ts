import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanceStyle } from '../models/dance-style';
import { DanceCategory } from '../models/dance-category'; 
import { DanceService } from '../services/dance-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-styleupdate',
  templateUrl: './styleupdate.component.html',
  styleUrls: ['./styleupdate.component.css']
})
export class StyleupdateComponent implements OnInit {
  styleForm: FormGroup;
  styleId: number = 0;
  successMessage: string = '';
  errorMessage: string = '';
  danceCategories: DanceCategory[] = []; // Liste des catégories

  constructor(
    private formBuilder: FormBuilder,
    private danceService: DanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.styleForm = this.formBuilder.group({
      name: ['', Validators.required],
      danceCategory: ['', Validators.required] // Ajoutez la catégorie de danse au formulaire
    });
  }

  ngOnInit(): void {
    // Récupérer l'ID du style depuis l'URL
    this.styleId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDanceStyle(); // Charger le style à mettre à jour
    this.loadDanceCategories(); // Charger les catégories de danse
  }

  getDanceStyle(): void {
    this.danceService.getDanceStyleById(this.styleId).subscribe(
      (style) => {
        // Remplir le formulaire avec les données du style
        this.styleForm.patchValue({
          name: style.name,
          danceCategory: style.danceCategory.id // Passez l'ID de la catégorie
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération du style de danse:', error);
        this.errorMessage = 'Échec du chargement du style.';
      }
    );
  }

  loadDanceCategories(): void {
    this.danceService.getAllDanceCategories().subscribe(
      (categories) => {
        this.danceCategories = categories; // Remplir la liste des catégories
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories de danse:', error);
        this.errorMessage = 'Échec du chargement des catégories de danse.';
      }
    );
  }

  updateDanceStyle(): void {
    if (this.styleForm.valid) {
      const selectedCategoryId = this.styleForm.value.danceCategory;

      // Créer l'objet pour la mise à jour
      const updatedStyle: DanceStyle = {
        id: this.styleId,
        name: this.styleForm.value.name,
        danceCategory: { id: selectedCategoryId, name: '' } // Le nom de la catégorie peut être omis si l'API n'en a pas besoin
      };

      // Mettre à jour le style via le service
      this.danceService.updateDanceStyle(this.styleId, selectedCategoryId, updatedStyle).subscribe(
        () => {
          this.successMessage = 'Style mis à jour avec succès !';
          this.router.navigate(['/stylelist']); // Rediriger après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du style:', error);
          this.errorMessage = 'Échec de la mise à jour du style. Veuillez réessayer.';
        }
      );
    }
  }
}
