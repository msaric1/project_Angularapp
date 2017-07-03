"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var events_app_component_1 = require("./events-app.component");
var index_1 = require("./events/index");
var index_2 = require("./common/index");
var navbar_component_1 = require("./nav/navbar.component");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
var router_1 = require("@angular/router");
var _404_component_1 = require("./errors/404.component");
var auth_service_1 = require("./user/auth.service");
var forms_1 = require("@angular/forms");
var user_module_1 = require("./user/user.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            user_module_1.UserModule],
        declarations: [events_app_component_1.EventsAppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            index_1.EventDetailsComponent,
            index_1.CreateEventComponent,
            index_1.CreateSessionComponent,
            index_1.SessionListComponent,
            _404_component_1.Error404Component,
            index_1.DurationPipe,
            index_1.UpVoteComponent,
            index_2.SimpleModalComponent,
            index_2.ModalTriggerDirective,
        ],
        bootstrap: [events_app_component_1.EventsAppComponent],
        providers: [index_1.EventService,
            auth_service_1.AuthService,
            index_1.EventRouteActivator,
            toastr_service_1.ToastrService,
            index_1.VoterService,
            { provide: index_2.JQ_TOKEN, useValue: jQuery },
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(createEvent) {
    if (createEvent.isDirty)
        return window.confirm('Are you sure that you want to leave this page without saving your data?');
    return true;
}
//# sourceMappingURL=app.module.js.map