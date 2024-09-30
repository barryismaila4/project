import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { DanceCategory } from '../models/dance-category';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {
  danceCategories: DanceCategory[] = [];
  successMessage: string = '';
  errorMessage: string = '';
  updateForm: FormGroup; 
  categoryIdToUpdate: number | null = null; 

  constructor(private danceService: DanceService, private formBuilder: FormBuilder, private router: Router) {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required]
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
        console.error('Error fetching dance categories:', error);
        this.errorMessage = 'Failed to load dance categories.';
      }
    );
  }

  deleteDanceCategory(id: number): void {
    this.danceService.deleteDanceCategory(id).subscribe(
      () => {
        this.successMessage = 'Category deleted successfully!';
        this.getDanceCategories(); 
      },
      (error) => {
        console.error('Error deleting category:', error);
        this.errorMessage = 'Failed to delete category. Please try again.';
      }
    );
  }

  editDanceCategory(category: DanceCategory): void {
    this.categoryIdToUpdate = category.id; 
    this.updateForm.patchValue(category); 
  }

  updateDanceCategory(): void {
    if (this.updateForm.valid && this.categoryIdToUpdate !== null) {
      const updatedCategory: DanceCategory = {
        id: this.categoryIdToUpdate,
        name: this.updateForm.value.name
      };

      this.danceService.updateDanceCategory(this.categoryIdToUpdate, updatedCategory).subscribe(
        () => {
          this.successMessage = 'Category updated successfully!';
          this.getDanceCategories(); 
          this.categoryIdToUpdate = null; 
          this.updateForm.reset(); 
        },
        (error) => {
          console.error('Error updating category:', error);
          this.errorMessage = 'Failed to update category. Please try again.';
        }
      );
    }
  }

  // Nouvelle méthode pour naviguer vers la page d'ajout de catégorie
  navigateToAddCategory(): void {
    this.router.navigate(['/categoryadd']); // Naviguer vers la page categoryadd
  }
  navigateToAddCategorys(): void {
    this.router.navigate(['/admin']); // Naviguer vers la page categoryadd
  }
}
