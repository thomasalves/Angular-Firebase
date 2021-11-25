import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientDataService {
  clinetes : Client = {
    id: '',
    name: '',
    cpf: '',
    endereco: '',
    email: '',
    dataNascimento: ''
  }

  private clientSource = new BehaviorSubject({ client: this.clinetes , key: '' });
  currentClient = this.clientSource.asObservable();

  constructor() { }

  changeClient( client: Client, key: string) {
    this.clientSource.next({ client: client, key: key });
  }
}
