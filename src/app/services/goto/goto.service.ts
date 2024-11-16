import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GotoService {

  constructor(
      private router: Router
  ) { }

    gotoHome() {
        this.router.navigate(['/app']).then(r => r);
    }
}
