import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    EventRouteActivator,
    DurationPipe,
    VoterService, 
    UpVoteComponent
} from './events/index'
import { JQ_TOKEN , SimpleModalComponent, ModalTriggerDirective } from './common/index'
import { NavBarComponent} from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserModule } from './user/user.module'

declare let jQuery : Object

@NgModule({
    imports :  [BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule.forRoot(appRoutes),
                UserModule],
    declarations : [EventsAppComponent,
                    EventsListComponent,
                    EventThumbnailComponent,
                    NavBarComponent,
                    EventDetailsComponent,
                    CreateEventComponent,
                    CreateSessionComponent,
                    SessionListComponent,
                    Error404Component,
                    DurationPipe,
                    UpVoteComponent,
                    SimpleModalComponent,
                    ModalTriggerDirective,
                 
                  

                
                    ],
    bootstrap : [EventsAppComponent],
    providers : [EventService,
                 AuthService,
                 EventRouteActivator, 
                 ToastrService, 
                 VoterService,
                 {provide: JQ_TOKEN, useValue: jQuery},
    {
        provide : 'canDeactivateCreateEvent',
        useValue : checkDirtyState
    }
   ]
})

export class AppModule {}

function checkDirtyState(createEvent : CreateEventComponent){
    if(createEvent.isDirty)
        return window.confirm('Are you sure that you want to leave this page without saving your data?')
    return true
}