import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
    selector: "event-thumbnail",
    template:
    `
        <div class = "well hoverwell thumbnail" >
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngSwitch]="event?.time">
                <span [ngStyle]="{'color' : event?.time === '8:00 am'? 'green': '#bbb',
                                  'font-weight' : event?.time === '8:00 am'? 'bold' : 'normal'}">Time: {{event?.time}}</span>
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>                                
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf = "event?.location">
                <span>Location:{{event?.location?.address}},</span>
                <span class = "pad-left">{{event?.location?.city}}</span>
                <span>{{event?.location?.country}}</span>
            </div>
            <div *ngIf ="event?.onlineUrl">
                <span> OnlineUrl : {{event.onlineUrl}} </span>
            </div>                              
        </div>
    `,
    styles : [
        `
            .pad-left {padding-left : 10px;}
            .thumbnail { min-height : 210px; }
            .myGreen {color : green;}
            .myBold { font-weight : bold;}
        `
    ]
})

export class EventThumbnailComponent { 
    @Input() event : IEvent
    handleClickMe(){
        console.log("Hello!");
    }
    getTimeClass(){
        const isTimeDefined = this.event.time && this.event.time === '8:00 am'
        return {myGreen : isTimeDefined,
            myBold : isTimeDefined}
    }
}