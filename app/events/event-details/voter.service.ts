import { Injectable } from '@angular/core'
import { TSession } from '../shared/event.model'
import { EventService } from '../shared/event.service'
@Injectable()

export class  VoterService{

    constructor(private eventService: EventService){}


    userHasVoted(session: TSession, user : string){
        return session.voters.some(function(voter){
            return voter===user;
        })
    }
    deleteVoter(session: TSession, user : string){
        session.voters = session.voters.filter(function(voter){
            return voter !== user;
        })
    }
    addVoter(session: TSession, user : string){
        session.voters.push(user);
    }
}