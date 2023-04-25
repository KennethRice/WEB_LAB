import { Component, Input } from '@angular/core'
import { Itoys } from '../../models/toysinterface'
import { OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToysService } from '../../services/toys.service';
import { timer } from 'rxjs';
import { Formtoys } from '../../models/form.model';


@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html'
})
export class toyslist {
  @Input()
  toyslist!: Itoys;
}

export class ToysformComponent {

  @Output() display!: boolean
  myForm!: FormGroup;
  isSubmitted = false;
  formtoys = new Formtoys()
 
  constructor(private toysService: ToysService) { }

  
}
