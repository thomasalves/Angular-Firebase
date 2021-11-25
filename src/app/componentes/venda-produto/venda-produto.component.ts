import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService, ProdutoService, vendaProduto, VendaprodutoService } from './../../shared';


@Component({
  selector: 'app-venda-produto',
  templateUrl: './venda-produto.component.html',
  styleUrls: ['./venda-produto.component.css']
})
export class VendaProdutoComponent implements OnInit {

  clientes:  Observable<any> | undefined;
  produtos:  Observable<any> | undefined;

  venda : vendaProduto = {
    Data: '',
    idCliente: '',
    idProdutos: '',
    total: 0
  }

  constructor(private clientService: ClientService,
              private produtoService: ProdutoService,
              private vendaService: VendaprodutoService ) { }

  ngOnInit(): void {
    this.clientes = this.clientService.getAll();
    this.produtos = this.produtoService.getAll()

    console.log(this.clientes, this.produtos)
  }


  onSubmit() {

    console.log(this.venda)
    // this.vendaService.insert(this.venda);
    this.venda = new vendaProduto();
  }

}
