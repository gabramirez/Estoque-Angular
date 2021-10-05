
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estoque } from '../models/estoque.model';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.component.html',
  styleUrls: ['./estoque-list.component.css']
})
export class EstoqueListComponent implements OnInit {

  @Input() estoques: Estoque[];
  @Output() editEstoque = new EventEmitter();
  @Output() deleteEstoque = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  edit(estoque:Estoque){
    this.editEstoque.emit(estoque)
  }

  delete(estoque:Estoque){
    this.deleteEstoque.emit(estoque)
  }




}
