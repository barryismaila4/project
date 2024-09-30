import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { DanceService } from '../services/dance-service.service'; // Assurez-vous d'importer votre service

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent {
  categoryForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private danceService: DanceService) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.danceService.addDanceCategory(this.categoryForm.value).subscribe(
        response => {
          this.successMessage = 'Category added successfully!';
          this.categoryForm.reset(); // Reset form after successful submission
        },
        error => {
          console.error('Error adding category:', error);
          this.errorMessage = 'Failed to add category. Please try again.';
        }
      );
    }
  }

  // Méthode pour revenir à la liste des catégories
  returnToCategoryList(): void {
    this.router.navigate(['/catlist']); // Naviguer vers catlist
  }
}
