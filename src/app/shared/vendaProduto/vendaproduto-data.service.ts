import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { vendaProduto } from '../';

@Injectable({
  providedIn: 'root'
})
export class VendaprodutoDataService {

  venda : vendaProduto = {
    Data: '',
    idCliente: '',
    idProdutos: '',
    total: 0
  }

  private vendaSource = new BehaviorSubject({ venda: this.venda , key: '' });
  currentVenda = this.vendaSource.asObservable();


  constructor() { }


  changeVenda( venda: vendaProduto, key: string) {
    this.vendaSource.next({ venda: venda, key: key });
  }
}
