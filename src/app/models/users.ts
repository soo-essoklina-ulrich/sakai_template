

export class Users {
  id: number;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  actif: boolean;
  role: string;


  constructor() {
    this.id = 0;
    this.email = "";
    this.password = "";
    this.nom = "";
    this.prenom = "";
    this.actif = false;
    this.role = "";
  }
}
