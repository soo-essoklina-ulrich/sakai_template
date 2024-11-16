export class Poste {
    id: number;
    libelle: string;
    adresse: string;
    email: string;
    password: string;
    contact: string;
    quartierCommune: number;

    constructor() {
        this.id = 0;
        this.libelle = '';
        this.adresse = '';
        this.email = '';
        this.password = '';
        this.contact = '';
        this.quartierCommune = 0;
    }
}
