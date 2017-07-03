import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService : EventService, private router : Router){}
    canActivate(route: ActivatedRouteSnapshot){
        const eventExist = Boolean(this.eventService.getEvent(route.params['id'])) // returns true if getEvent return nonempty string
        if (!eventExist)
            this.router.navigate(['/404'])
        else
            return eventExist
    }
}