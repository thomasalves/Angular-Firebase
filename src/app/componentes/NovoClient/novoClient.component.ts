import { Client, ClientService, ClientDataService } from './../../shared';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid'


@Component({
  selector: 'app-novoClient',
  templateUrl: './novoClient.component.html',
  styleUrls: ['./novoClient.component.css']
})

export class NovoClientComponent implements OnInit {

  key: string = '';
  cliente: Client = {
    id : new UUID,
    name: '',
    cpf: '',
    endereco: '',
    email: '',
    dataNascimento: ''
  }
  uuidValue: string | undefined;


  constructor(private clientService: ClientService, private clientDataService: ClientDataService ) {}

  ngOnInit(): void {
    this.cliente = new Client();
    this.clientDataService.currentClient.subscribe(data => {
      console.log(data)
      if (data.client && data.key ) {
        this.cliente = new Client();
        console.log('entrei', data)
        this.cliente.name = data.client.name ;
        this.cliente.cpf = data.client.cpf;
        this.cliente.endereco = data.client.endereco
        this.cliente.email = data.client.email;
        this.cliente.dataNascimento = data.client.dataNascimento
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
      this.clientService.update(this.cliente, this.key);
    } else {
      this.cliente.id = this.generateUUID()
      console.log(this.key)
      this.clientService.insert(this.cliente);
    }

    this.cliente = new Client();
  }

}
