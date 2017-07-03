import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    EventRouteActivator
} from './events/index'
import { Error404Component } from './errors/404.component'
import { Routes } from '@angular/router'
export const appRoutes : Routes = [
    { path : 'events', component : EventsListComponent},
    { 
        path: 'events/new', 
        component : CreateEventComponent,
        canDeactivate : ['canDeactivateCreateEvent']
    },
    {
        path : 'events/:id',
        component : EventDetailsComponent,
        canActivate : [EventRouteActivator]
    },
    { path : '404', component : Error404Component},
    { path : 'events/session/new', component : CreateSessionComponent},
    { path : 'user', loadChildren : 'app/user/user.module#UserModule'},
    { path : '', redirectTo : '/events', pathMatch : "full" }
]