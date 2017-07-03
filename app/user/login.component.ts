import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
      selector: "login",
    templateUrl : 'app/user/login.component.html',
    styles : [`
        a {margin-bottom: -10px;}
        em {float : right; color : #E05C65; padding-left : 10px;}
    `]
})

export class LoginComponent{
    constructor(private authService : AuthService, private router : Router){


    }
    login(formValue){
        this.authService.userLogin(formValue.userName, formValue.password)
        this.router.navigate(['events'])
    }
    handleCancelClick(){
        this.router.navigate(['events'])
    }
}