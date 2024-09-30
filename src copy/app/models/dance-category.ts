export class DanceCategory {
  id: number;  // ID de la catégorie
  name: string; // Nom de la catégorie

  constructor(id: number = 0, name: string = '') {
    this.id = id;
    this.name = name;
  }
}
