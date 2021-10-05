import { Estoque } from '../models/estoque.model';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private localStorage: LocalStorageService) { }

  delete(estoque: Estoque) {
    this.localStorage.remove(estoque.id)
  }

  save(estoque: Estoque) {
    this.localStorage.set(estoque.id, estoque);
  }

  getEstoque(id: string): Estoque {
    return this.localStorage.get(id);
  }

  getAll(): Estoque[] {
    return this.localStorage.keys().map(id => this.getEstoque(id));
  }

}
