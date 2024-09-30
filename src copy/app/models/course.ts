import { DanceSchool } from "./dance-school";


export class Course {
    id: number = 0;
    name: string = '';
    instructor: string = '';
    schedule: string = '';
    contenu: string = '';
    danceSchool: DanceSchool = new DanceSchool();
  }