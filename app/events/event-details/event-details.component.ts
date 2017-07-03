import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent } from '../shared/event.model'

@Component({
    templateUrl : "/app/events/event-details/event-details.component.html",
     styles: [`
        .myImageClass {height: 100px;}
    `]
})

export class EventDetailsComponent implements OnInit {
    event : IEvent
    addMode : Boolean = false
    filterby : string = 'all';
    constructor(private eventService : EventService,
                private route : ActivatedRoute) {

    }

    ngOnInit(){
        this.route.params.forEach((params: Params)=> {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode= false;
        })
/*
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id'])*/
    }

    addSession(){
        this.addMode = true
    }
    addSessionToCurrentEvent(session){
        session.id = Math.max.apply (Math, function (s) {return s.id}) + 1
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
}