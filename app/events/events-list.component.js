"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_service_1 = require("./shared/event.service");
var EventsListComponent = (function () {
    function EventsListComponent(eventService) {
        this.eventService = eventService;
        //this.events = this.eventService.getEvents()
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        selector: "events-list",
        template: "\n        <div>\n            <h1>Upcoming Angular2 Events</h1>\n            <div class = \"row\">\n                <div class = \"col-md-6\" *ngFor = \"let evt of events\">\n                <event-thumbnail [routerLink]=\"['/events', evt.id]\" #thumbnail [event] = evt></event-thumbnail>\n                </div>\n            </div>\n        </div>\n    ",
        styles: ["\n        \n    "]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map