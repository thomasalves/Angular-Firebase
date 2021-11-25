import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoDataService, ProdutoService} from './../../shared'

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Observable<any> | undefined;

  constructor(private produtoService: ProdutoService, private produtoDataService: ProdutoDataService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

  delete(key: string) {
    this.produtoService.delete(key);
  }

  edit(produto: Produto, key: string) {
    this.produtoDataService.changeProduto(produto, key);
  }

}
