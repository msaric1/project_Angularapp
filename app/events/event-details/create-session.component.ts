import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TSession } from '../shared/index'


@Component({
  selector : 'create-session',
  templateUrl : 'app/events/event-details/create-session.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::ms-input-placeholder { color: #999; }    
  `] 
})
export class CreateSessionComponent implements OnInit {
    sessionForm : FormGroup
    sessionName : FormControl
    presenter : FormControl
    duration : FormControl
    level : FormControl
    abstract : FormControl
    @Output() saveNewSession = new EventEmitter()

    ngOnInit(){
        this.sessionName = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', Validators.required)

        this.sessionForm = new FormGroup({
            sessionName : this.sessionName,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        })
    }

    saveSession(formValues){
        var session : TSession = {
            id : undefined,
            name : formValues.sessionName,
            presenter : formValues.presenter,
            duration : Number(formValues.duration),
            level : formValues.level,
            abstract : formValues.abstract,
            voters : []
        }
        console.log("heloo", session);
        this.saveNewSession.emit(session);
    }
}