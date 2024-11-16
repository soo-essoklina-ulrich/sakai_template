import { Enfant } from "./Enfant";

export class Parents {
  id: number;
    nom: string;
    prenom: string;
    typeParent: string;
    nationalite: number;
    isDeclarant: boolean;
    profession: string;
    adresse: string;
    email: string;
    enfants: Enfant[];

    constructor() {
        this.id = 0;
        this.nom = '';
        this.prenom = '';
        this.typeParent = '';
        this.nationalite = 0;
        this.isDeclarant = false;
        this.profession = '';
        this.adresse = '';
        this.email = '';
        this.enfants = [];
    }
}
