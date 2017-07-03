import { Component, OnInit} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import {ToastrService} from '../common/toastr.service'

@Component({
    selector:"profile",
    templateUrl: 'app/user/profile.component.html',
    styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::ms-input-placeholder { color: #999; }    
  `]
})

export class UserProfileComponent implements OnInit{
    profileForm : FormGroup
    constructor(private authService : AuthService, private router : Router, private toastr : ToastrService){

    }

    ngOnInit(){
          var firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    var lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
    }

    handleCancelClick(){
        this.router.navigate(['events'])
    }

    validateFirstName(){
        return this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched
    }

    validateLastName(){
        return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched
    }

    saveProfile(formValues){
        if (this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)  
            this.toastr.success("You have successfully updated info!")    
            //this.router.navigate(['events'])
        }
    }
}