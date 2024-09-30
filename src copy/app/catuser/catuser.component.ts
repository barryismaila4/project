import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DanceCategory } from '../models/dance-category';
import { DanceService } from '../services/dance-service.service';
import { WeatherService } from '../weather.service';
 // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-catuser',
  templateUrl: './catuser.component.html',
  styleUrls: ['./catuser.component.css']
})
export class CatuserComponent implements OnInit {
  danceCategories: DanceCategory[] = [];
  errorMessage: string = '';
  temperature: number | null = null; // Pour stocker la température

  constructor(private danceService: DanceService, private router: Router, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getDanceCategories();
    this.getWeather(); // Appel à la méthode pour récupérer la météo
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

  getWeather(): void {
    this.weatherService.getWeather('Tunis').subscribe(
      (data) => {
        this.temperature = data.main.temp; // Récupération de la température
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  navigateToStyles(categoryId: number): void {
    this.router.navigate(['public/styles', categoryId]);
  }
}
