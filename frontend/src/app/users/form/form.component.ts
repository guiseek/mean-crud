import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() user;
  @Output() save = new EventEmitter<any>();
  public enableToSave: boolean = false;
  data = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl(),
    ativo: new FormControl(true)
  });
  constructor() { }
  get nome(): any { return this.data.get('nome'); }
  get idade(): any { return this.data.get('idade'); }
  get ativo(): any { return this.data.get('ativo'); }
  ngOnChanges(changes) {
    if (changes.user.currentValue) {
      this.data.patchValue(changes.user.currentValue);
    }
  }
  ngOnInit() {
    this.data.valueChanges.subscribe(() => {
      this.enableToSave = this.data.valid;
    });
  }
  submit() {
    this.save.emit({...this.data.value});
    this.data.reset();
  }
}
