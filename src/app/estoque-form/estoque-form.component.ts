import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estoque } from '../models/estoque.model';


@Component({
  selector: 'app-estoque-form',
  templateUrl: './estoque-form.component.html',
  styleUrls: ['./estoque-form.component.css']
})
export class EstoqueFormComponent implements OnInit {

  @Input() estoque: Estoque;
  @Output() saveEstoque = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

   this.saveEstoque.emit(form)
  }

}
