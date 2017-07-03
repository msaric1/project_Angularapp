import { Component, OnInit } from '@angular/core'
import { EventThumbnailComponent } from './event-thumbnail.component'
import { EventService } from './shared/event.service'
import { IEvent } from './shared/event.model'

@Component({
    selector: "events-list",
    template:
    `
        <div>
            <h1>Upcoming Angular2 Events</h1>
            <div class = "row">
                <div class = "col-md-6" *ngFor = "let evt of events">
                <event-thumbnail [routerLink]="['/events', evt.id]" #thumbnail [event] = evt></event-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles: [`
        
    `]
})

export class EventsListComponent implements OnInit {
    events : IEvent []
    constructor(private eventService : EventService){
        //this.events = this.eventService.getEvents()
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}