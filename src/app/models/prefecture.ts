import { Region } from "./region";

export class Prefecture {
  id: number;
  nom_prefecture: string;
  regionId: Region;

  constructor() {
    this.id = 0;
    this.nom_prefecture = '';
    this.regionId = new Region();
  }
}
