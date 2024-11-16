import { CentreSante } from "./CentreSante";
import { Enfant } from "./Enfant";

export class AttestationNaissance {
    // Informations pour l'enfant
    nomEnfant: string;
    prenomEnfant: string;
    sexeEnfant: string;
    dateNaissanceEnfant: Date;
    heureNaissanceEnfant: Date;
    lieuNaissanceEnfant: string;
    situationMatrimonialeParents: string;
    typeAccouchement: string;
    centreSanteId: CentreSante;  // ID du centre de santé lié à l'enfant

    // Informations pour le parent 1 (Père ou Mère)
    nomParent1: string;
    prenomParent1: string;
    typeParent1: string;  // "Père" ou "Mère"
    nationaliteParent1: number;
    isDeclarantParent1: boolean;
    professionParent1: string;
    adresseParent1: string;
    emailParent1: string;

    // Informations pour le parent 2 (Père ou Mère)
    nomParent2: string;
    prenomParent2: string;
    typeParent2: string;  // "Père" ou "Mère"
    nationaliteParent2: number;
    isDeclarantParent2: boolean;
    professionParent2: string;
    adresseParent2: string;
    emailParent2: string;

    id: number;

    constructor() {

        // Informations pour l'enfant
        this.nomEnfant = "";
        this.prenomEnfant = "";
        this.sexeEnfant = "";
        this.dateNaissanceEnfant = new Date();
        this.heureNaissanceEnfant = new Date();
        this.lieuNaissanceEnfant = "";
        this.situationMatrimonialeParents = "";
        this.typeAccouchement = "";

        // Informations pour le parent 1 (Père ou Mère)
        this.nomParent1 = "";
        this.prenomParent1 = "";
        this.typeParent1 = "";
        this.nationaliteParent1 = 0;
        this.isDeclarantParent1 = false;
        this.professionParent1 = "";
        this.adresseParent1 = "";
        this.emailParent1 = "";

        // Informations pour le parent 2 (Père ou Mère)
        this.nomParent2 = "";
        this.prenomParent2 = "";
        this.typeParent2 = "";
        this.nationaliteParent2 = 0;
        this.isDeclarantParent2 = false;
        this.professionParent2 = "";
        this.adresseParent2 = "";
        this.emailParent2 = "";

        this.centreSanteId = new CentreSante();
        this.id=0;
    }
}
