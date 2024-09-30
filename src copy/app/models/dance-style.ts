import { DanceCategory } from "./dance-category";

export class DanceStyle {
    id: number;
    name: string;
    danceCategory: DanceCategory;

    constructor(id: number = 0, name: string = '', danceCategory: DanceCategory = new DanceCategory()) {
        this.id = id;
        this.name = name;
        this.danceCategory = danceCategory;
    }
}
