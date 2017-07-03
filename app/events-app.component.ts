import { Component } from '@angular/core'
import { EventsListComponent } from './events/events-list.component'
import { NavBarComponent } from './nav/navbar.component'
@Component({
    selector : "events-app",
    template : `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
        `
})


export class EventsAppComponent {

}