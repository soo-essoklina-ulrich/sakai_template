import { Parents } from "./parents";

export class LivretFamille {
    id: number;
    dateAjout: Date;
    parentsId: Parents;

    constructor() {
        this.id = 0;
        this.dateAjout = new Date();
        this.parentsId = new Parents();
    }
}
