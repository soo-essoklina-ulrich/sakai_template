import { Prefecture } from "./prefecture";

export class Ville {
  id: number;
  nomVille: string;
  prefectureId: Prefecture;

    constructor() {
      this.id = 0;
      this.nomVille = '';
      this.prefectureId = new Prefecture();
    }
}
