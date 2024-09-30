import { DanceStyle } from "./dance-style";

export class DanceSchool {
    id: number;
    name: string;
    position: string;
    horaire: string;
    danceStyle: DanceStyle;

    constructor(id: number = 0, name: string = '', position: string = '', horaire: string = '', danceStyle: DanceStyle = new DanceStyle()) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.horaire = horaire;
        this.danceStyle = danceStyle;
    }
}
