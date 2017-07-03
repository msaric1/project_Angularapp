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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.handleClickMe = function () {
        console.log("Hello!");
    };
    EventThumbnailComponent.prototype.getTimeClass = function () {
        var isTimeDefined = this.event.time && this.event.time === '8:00 am';
        return { myGreen: isTimeDefined,
            myBold: isTimeDefined };
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: "event-thumbnail",
        template: "\n        <div class = \"well hoverwell thumbnail\" >\n            <h2>{{event?.name}}</h2>\n            <div>Date: {{event?.date}}</div>\n            <div [ngSwitch]=\"event?.time\">\n                <span [ngStyle]=\"{'color' : event?.time === '8:00 am'? 'green': '#bbb',\n                                  'font-weight' : event?.time === '8:00 am'? 'bold' : 'normal'}\">Time: {{event?.time}}</span>\n                <span *ngSwitchCase=\"'8:00 am'\">(Early start)</span>\n                <span *ngSwitchCase=\"'10:00 am'\">(Late start)</span>\n                <span *ngSwitchDefault>(Normal start)</span>                                \n            </div>\n            <div>Price: ${{event?.price}}</div>\n            <div *ngIf = \"event?.location\">\n                <span>Location:{{event?.location?.address}},</span>\n                <span class = \"pad-left\">{{event?.location?.city}}</span>\n                <span>{{event?.location?.country}}</span>\n            </div>\n            <div *ngIf =\"event?.onlineUrl\">\n                <span> OnlineUrl : {{event.onlineUrl}} </span>\n            </div>                              \n        </div>\n    ",
        styles: [
            "\n            .pad-left {padding-left : 10px;}\n            .thumbnail { min-height : 210px; }\n            .myGreen {color : green;}\n            .myBold { font-weight : bold;}\n        "
        ]
    })
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map