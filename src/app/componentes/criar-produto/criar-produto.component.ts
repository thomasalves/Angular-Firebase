import { Component, OnInit } from '@angular/core';
import {Produto, ProdutoDataService, ProdutoService} from './../../shared'
import { UUID } from 'angular2-uuid'


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  key: string = '';
  uuidValue: string | undefined;
  produto: Produto = {
    id: new UUID,
    nome: '',
    valor: 0
  }

  constructor(private produtoService: ProdutoService, private produtoDataService: ProdutoDataService ) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.produtoDataService.currentProduto.subscribe(data => {
      console.log(data)
      if (data.produto && data.key ) {
        this.produto = new Produto();
        console.log('entrei', data)
        this.produto.nome = data.produto.nome ;
        this.produto.valor = data.produto.valor;
        this.key = data.key;
      }
    })
  }


  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }

  onSubmit() {
    if (this.key) {
      this.produtoService.update(this.produto, this.key);
    } else {
      this.produto.id = this.generateUUID()
      console.log(this.key)
      this.produtoService.insert(this.produto);
    }

    this.produto = new Produto();
  }


}
