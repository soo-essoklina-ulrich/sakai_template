import { Mairie } from "./Mairie";
import { Quartier } from "./quartier";
import { TypeCentre } from "./type-centre";

export class CentreSante {
  id: number;
  nomDistrictSanitaire: string;
  adresse: string;
  contact: string;
  password: string;
  dateCreation: Date;
  email: string;
  typeCentreId: TypeCentre;
  quartierCommuneId: Quartier;
  mairieId: Mairie;

  constructor() {
      this.id = 0;
      this.nomDistrictSanitaire = "";
      this.adresse = "";
      this.contact = "";
      this.password = "";
      this.dateCreation = new Date();
      this.email = "";
      this.typeCentreId = new TypeCentre();
      this.quartierCommuneId = new Quartier();
      this.mairieId = new Mairie();
  }
}
