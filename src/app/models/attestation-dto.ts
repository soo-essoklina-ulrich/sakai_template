import { CentreSante } from "./CentreSante";
import { Enfant } from "./Enfant";

export class AttestationDTO {
  id:number;
  num_ref_demande:number;
  date_delivrance: Date;
  etatAttestation : boolean;
  enfant: Enfant;
  centreSante: CentreSante;

  constructor(){
    this.id = 0;
    this.num_ref_demande = 0;
    this.date_delivrance = new Date();
    this.etatAttestation = false;
    this.enfant = new Enfant();
    this.centreSante = new CentreSante();
  }
}
