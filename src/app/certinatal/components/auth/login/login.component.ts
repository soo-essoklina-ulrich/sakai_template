import {Component, OnInit} from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {UserService} from "../../../../services/user.service";
import {FormGroup} from "@angular/forms";
import {JwtService} from "../../../../services/stock/jwt.service";
import {GotoService} from "../../../../services/goto/goto.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(public layoutService: LayoutService, private UserService:UserService, private JwtService:JwtService,
                private Goto: GotoService) { }

    ngOnInit(): void {
        this.createForm()
    }

    createForm() {
        this.loginForm = this.UserService.createForm();
    }

    sendDate(){
        console.log(this.loginForm.value);
        this.UserService.login(this.loginForm.value).subscribe(
            res => {
                console.log(res);
                this.JwtService.stocktoken(res.bearer);
                this.Goto.gotoHome();
            },
            err => {
                console.log(err);
            }
        );
    }
}
