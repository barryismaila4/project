import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { DanceSchool } from '../models/dance-school';
import { DanceStyle } from '../models/dance-style';
import { DanceService } from '../services/dance-service.service';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.css']
})
export class AddschoolComponent implements OnInit {
  schoolForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  danceStyles: DanceStyle[] = [];
  isLoading: boolean = true;

  constructor(private formBuilder: FormBuilder, private danceService: DanceService, private router: Router) {
    // Initialize the form with validators
    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      horaire: ['', Validators.required],
      danceStyle: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDanceStyles();
  }

  loadDanceStyles(): void {
    this.danceService.getAllDanceStyles().subscribe({
      next: (styles) => {
        this.danceStyles = styles;
        console.log('Retrieved dance styles:', this.danceStyles);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading dance styles:', error);
        this.errorMessage = 'Failed to load dance styles.';
        this.isLoading = false;
      }
    });
  }

  addDanceSchool(): void {
    if (this.schoolForm.invalid) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    const selectedDanceStyle: DanceStyle = this.schoolForm.value.danceStyle;

    if (!selectedDanceStyle || !selectedDanceStyle.id) {
      this.errorMessage = 'Selected dance style is invalid.';
      return;
    }

    const newSchool: DanceSchool = {
      id: 0,
      name: this.schoolForm.value.name,
      position: this.schoolForm.value.position,
      horaire: this.schoolForm.value.horaire,
      danceStyle: selectedDanceStyle
    };

    console.log('Adding new dance school:', newSchool); // Debug log to see the new school being added

    this.danceService.addDanceSchool(selectedDanceStyle.id, newSchool).subscribe({
      next: (response: DanceSchool) => {
        this.successMessage = 'Dance school added successfully!';
        this.schoolForm.reset();
        this.loadDanceStyles(); // Reload styles if necessary
      },
      error: (error: any) => {
        console.error('Error adding dance school:', error);
        this.errorMessage = 'Failed to add dance school. Please try again.';
      }
    });
  }

  // Méthode pour rediriger vers la liste des écoles
  goToListSchool(): void {
    this.router.navigate(['/listschool']); // Rediriger vers le chemin '/listschool'
  }
}
