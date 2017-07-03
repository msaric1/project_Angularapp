import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()

export class AuthService{
    currentUser : IUser
    userLogin(userName : string, password : string){
        this.currentUser = {
            id : 1,
            firstName : "Martina",
            lastName : "Šarić",
            userName : userName 
        }
    }
    isAuthenticated(){
        return Boolean(this.currentUser)
    }
    updateCurrentUser(firstName : string, lastName : string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}