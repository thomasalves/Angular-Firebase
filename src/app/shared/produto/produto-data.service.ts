import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '..';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDataService {

  produtos: Produto = {
    id: '',
    nome: '' ,
    valor: 0
  }
  private produtoSource = new BehaviorSubject({ produto: this.produtos , key: '' });
  currentProduto = this.produtoSource.asObservable();


  constructor() { }

  changeProduto( produto: Produto, key: string) {
    this.produtoSource.next({ produto: produto, key: key });
  }
}
