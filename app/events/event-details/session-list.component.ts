import { Component, Input, OnChanges } from '@angular/core'
import { TSession } from '../shared/index'
import {AuthService} from '../../user/auth.service'
import {VoterService} from './voter.service'

@Component({
    selector : 'session-list',
    templateUrl : 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions : TSession[]
    @Input() filterby : string= 'all'
     @Input() sortby : string
    filteredSessions : TSession[] = []
constructor(private auth : AuthService, private voterService: VoterService){}
    ngOnChanges(){ // kad se dogodi promjena na filterby reagiraj

        if (this.sessions)
        {
            this.filterSessions(this.filterby);
            if (this.sortby=== 'votes'){
                this.filteredSessions.sort(function(ses1, ses2){
                    return ses1.voters.length > ses2.voters.length ? -1 : 1
                })

            }
            else{
                this.filteredSessions.sort(function(ses1, ses2){
                    return ses1.name > ses2.name ? 1 : -1
                })
            }
        }
    }

    filterSessions(filter){
        console.log(this.filterby)
        if (filter == 'all'){
            this.filteredSessions = this.sessions.slice(0); // doslovno kopira sve sa slice (0) , tj od prvog indeksa 
        }else {
            this.filteredSessions = this.sessions.filter(function(session){ // gledam oce taj session uci u filtered session ili nece
                return session.level.toLocaleLowerCase() === filter; //provjeravam level, to LocaleLower case, prebaci u mala slova jer su upisana sa prvim velikim slovom
            })
        }
    }
userHasVoted(session : TSession){
   return this.voterService.userHasVoted(session, this.auth.currentUser.userName )
}
toggleVote (session : TSession){

    if (this.userHasVoted(session)){

    this.voterService.deleteVoter(session, this.auth.currentUser.userName);
}

    else {
    this.voterService.addVoter(session, this.auth.currentUser.userName)
}

    if (this.sortby === "votes"){ this.filteredSessions.sort(function(ses1, ses2){
                    return ses1.voters.length > ses2.voters.length ? -1 : 1
                })

    }
}
}