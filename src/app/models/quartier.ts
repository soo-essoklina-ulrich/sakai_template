import { Ville } from "./ville";

export class Quartier {
  id: number;
  nom_Quartier: string;
  villeId: Ville;

  constructor() {
    this.id = 0;
    this.nom_Quartier = '';
    this.villeId = new Ville();
  }
}
