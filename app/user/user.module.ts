import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserProfileComponent } from './profile.component'
import { RouterModule } from '@angular/router'
import { UserRouter } from './user.routes'
import { LoginComponent } from './login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    exports : [
        LoginComponent,
       UserProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(UserRouter)
    ],
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})

export class UserModule{}