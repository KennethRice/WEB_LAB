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

  /* ngOnInit(): void {
 
     this.myForm = new FormGroup({
       id: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required),
       price: new FormControl('', Validators.required),
       image: new FormControl('', Validators.required),
       category: new FormControl('', Validators.required),
       store1: new FormControl('', Validators.required),
       store2: new FormControl('', Validators.required),
       ageCategory: new FormControl('', Validators.required)
     })
   }
 }
 /*  onSubmit(myForm: any) {
     console.log(myForm.value);
     this._createItem(myForm.value)
   }
 
   private async _createItem(itoys: FormData) {
     await this.toysService
       .createitem(itoys)
       .subscribe(() => {
         window.location.reload();
       });
 
   }
 }
 */
}
