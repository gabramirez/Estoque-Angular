import { NgForm } from '@angular/forms';
import { EstoqueService } from './../services/estoque.service';
import { Estoque } from '../models/estoque.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  estoque: Estoque;
  estoques: Estoque[];

  constructor(private estoqueService: EstoqueService) { }

  ngOnInit() {
    this.estoque = new Estoque();
    this.estoques = this.estoqueService.getAll()

  }

  edit(estoque: Estoque) {
    this.estoque = estoque;
  }

  delete(estoque: Estoque) {
    let index = this.estoques.map((item) => item.id).indexOf(estoque.id)
    this.estoqueService.delete(estoque)
    this.estoques.splice(index, 1)
  }

  async saveEstoque(form: NgForm) {
    this.estoque = form.value;
    this.estoque.id = (this.estoque.id) ? this.estoque.id : new Date().getTime().toString();
    this.estoque['foto'] =await this.plotImage();
    this.estoqueService.save(this.estoque);
    this.estoques = this.estoqueService.getAll()
    form.resetForm();
  }

  plotImage() {
    return new Promise((resolve, reject) => {
    const file: any = document.getElementById('foto');
    const reader = new FileReader();
    reader.readAsDataURL(file['files'][0]);
    reader.onload = function () {
    localStorage.setItem("image", reader.result as any);
    resolve(localStorage.getItem("image"));
    };
    });
    }


}
