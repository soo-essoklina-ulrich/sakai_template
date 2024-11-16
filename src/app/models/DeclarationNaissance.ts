import { AttestationNaissance } from "./attestation-naissance";
import { Mairie } from "./Mairie";
import { Parents } from "./parents";

export class DeclarationNaissance  {
    id: number;
    nbEnfantsVivants: number;
    nbEnfantsMorts: number;
    mariageEtatCivil: boolean;
    mariageCoutumier: boolean;
    dateDeclaration: Date;
    statut_demande: string;
    enfantId: number;
    declarantId: Parents;
    attestationNaissanceId: AttestationNaissance;
    municipaliteId: Mairie;

    constructor() {
        this.id = 0;
        this.nbEnfantsVivants = 0;
        this.nbEnfantsMorts = 0;
        this.mariageEtatCivil = false;
        this.mariageCoutumier = false;
        this.dateDeclaration = new Date();
        this.statut_demande = "";
        this.enfantId = 0;
        this.declarantId = new Parents();
        this.attestationNaissanceId = new AttestationNaissance();
        this.municipaliteId = new Mairie();
    }
}
