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
var auth_service_1 = require("../../user/auth.service");
var voter_service_1 = require("./voter.service");
var SessionListComponent = (function () {
    function SessionListComponent(auth, voterService) {
        this.auth = auth;
        this.voterService = voterService;
        this.filterby = 'all';
        this.filteredSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterby);
            if (this.sortby === 'votes') {
                this.filteredSessions.sort(function (ses1, ses2) {
                    return ses1.voters.length > ses2.voters.length ? -1 : 1;
                });
            }
            else {
                this.filteredSessions.sort(function (ses1, ses2) {
                    return ses1.name > ses2.name ? 1 : -1;
                });
            }
        }
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        console.log(this.filterby);
        if (filter == 'all') {
            this.filteredSessions = this.sessions.slice(0); // doslovno kopira sve sa slice (0) , tj od prvog indeksa 
        }
        else {
            this.filteredSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter; //provjeravam level, to LocaleLower case, prebaci u mala slova jer su upisana sa prvim velikim slovom
            });
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
        if (this.sortby === "votes") {
            this.filteredSessions.sort(function (ses1, ses2) {
                return ses1.voters.length > ses2.voters.length ? -1 : 1;
            });
        }
    };
    return SessionListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SessionListComponent.prototype, "sessions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "filterby", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "sortby", void 0);
SessionListComponent = __decorate([
    core_1.Component({
        selector: 'session-list',
        templateUrl: 'app/events/event-details/session-list.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, voter_service_1.VoterService])
], SessionListComponent);
exports.SessionListComponent = SessionListComponent;
//# sourceMappingURL=session-list.component.js.map