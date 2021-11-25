import { Component, OnInit } from '@angular/core';
import { Client, ClientService, ClientDataService } from './../../shared';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: Observable<any> | undefined;

  constructor(private clientService: ClientService, private clientDataService: ClientDataService) { }

  ngOnInit(): void {
    this.clientes = this.clientService.getAll();
  }

  delete(key: string) {
    this.clientService.delete(key);
  }

  edit(cliente: Client, key: string) {
    this.clientDataService.changeClient(cliente, key);
  }

}
