import { Parents } from "./parents";

export class Enfant {
  id: number;
    nom: string;
    prenom: string;
    sexe: string;
    dateNaissance: Date;
    heureNaissance: Date;
    lieuNaissance: string;
    situationMatrimonialeParents: string;
    typeAccouchement: string;

    constructor() {
        this.id = 0;
        this.nom = "";
        this.prenom = "";
        this.sexe = "";
        this.dateNaissance = new Date();
        this.heureNaissance = new Date();
        this.lieuNaissance = "";
        this.situationMatrimonialeParents = "";
        this.typeAccouchement = "";
    }
}
