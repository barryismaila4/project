import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { DanceCategory } from '../models/dance-category';
import { DanceSchool } from '../models/dance-school';
import { DanceStyle } from '../models/dance-style';

@Injectable({
  providedIn: 'root',
})
export class DanceService {
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  // DanceCategory Methods
  addDanceCategory(category: DanceCategory): Observable<DanceCategory> {
    return this.http.post<DanceCategory>(`${this.apiUrl}/categories`, category);
  }

  getAllDanceCategories(): Observable<DanceCategory[]> {
    return this.http.get<DanceCategory[]>(`${this.apiUrl}/categories`);
  }

  getDanceCategoryById(id: number): Observable<DanceCategory> {
    return this.http.get<DanceCategory>(`${this.apiUrl}/categories/${id}`);
  }

  updateDanceCategory(id: number, category: DanceCategory): Observable<DanceCategory> {
    return this.http.put<DanceCategory>(`${this.apiUrl}/categories/${id}`, category);
  }

  deleteDanceCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categories/${id}`);
  }

  // DanceStyle Methods
  addDanceStyle(categoryId: number, style: DanceStyle): Observable<DanceStyle> {
    return this.http.post<DanceStyle>(`${this.apiUrl}/categories/${categoryId}/styles`, style);
  }

  getAllDanceStyles(): Observable<DanceStyle[]> {
    return this.http.get<DanceStyle[]>(`${this.apiUrl}/styles`);
  }

  getDanceStyleById(id: number): Observable<DanceStyle> {
    return this.http.get<DanceStyle>(`${this.apiUrl}/styles/${id}`);
  }

  updateDanceStyle(id: number, categoryId: number, style: DanceStyle): Observable<DanceStyle> {
    return this.http.put<DanceStyle>(`${this.apiUrl}/styles/${id}?categoryId=${categoryId}`, style);
  }

  deleteDanceStyle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/styles/${id}`);
  }

  // DanceSchool Methods
  addDanceSchool(styleId: number, danceSchool: DanceSchool): Observable<DanceSchool> {
    return this.http.post<DanceSchool>(`${this.apiUrl}/styles/${styleId}/schools`, danceSchool);
  }

  // Ajout de la méthode pour récupérer les styles par catégorie
  getDanceStylesByCategoryId(categoryId: number): Observable<DanceStyle[]> {
    return this.http.get<DanceStyle[]>(`${this.apiUrl}/categories/${categoryId}/styles`);
  }

  // Récupérer les écoles basées sur l'ID du style
  getDanceSchoolsByStyleId(styleId: number): Observable<DanceSchool[]> {
    return this.http.get<DanceSchool[]>(`${this.apiUrl}/styles/${styleId}/schools`); // Correction ici
  }

  getAllDanceSchools(): Observable<DanceSchool[]> {
    return this.http.get<DanceSchool[]>(`${this.apiUrl}/schools`);
  }
   // Ajout de la méthode pour récupérer les cours par ID d'école de danse
   getCoursesByDanceSchoolId(danceSchoolId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/schools/${danceSchoolId}/courses`);
  }

  getDanceSchoolById(id: number): Observable<DanceSchool> {
    return this.http.get<DanceSchool>(`${this.apiUrl}/schools/${id}`);
  }

  updateDanceSchool(id: number, school: DanceSchool): Observable<DanceSchool> {
    return this.http.put<DanceSchool>(`${this.apiUrl}/schools/${id}`, school);
  }

  deleteDanceSchool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/schools/${id}`);
  }

  // Course Methods
  addCourse(schoolId: number, course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/schools/${schoolId}/courses`, course);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/courses/${id}`);
  }

  updateCourse(id: number, schoolId: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/courses/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/courses/${id}`);
  }
}
