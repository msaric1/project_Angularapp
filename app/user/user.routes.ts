import { Routes } from '@angular/router'
import { UserProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

export const UserRouter : Routes = [
    { path : 'profile', component : UserProfileComponent},
    { path : 'login', component : LoginComponent}
]