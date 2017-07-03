import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import {EventService} from '../events/shared/event.service' 
import { TSession } from '../events/index'

@Component({
    selector: "nav-bar",
    templateUrl: "./app/nav/navbar.component.html",
    styles : [`
        .nav.navbar-nav { font-size : 15px; }
        #searchForm { padding-right : 100px; }
        @media (max-width: 1200px) { #searchForm { display : none; } }
        li > a.active {color : #F97924;}

	`]
})

export class NavBarComponent{
    foundSessions : TSession[];
    constructor(private authService : AuthService, private eventService : EventService){
      
    }
   
    searchSessions(searchPattern: string){
    this.eventService.searchSessions(searchPattern).subscribe(sessions => {
        this.foundSessions = sessions;
    })
    
    }
}