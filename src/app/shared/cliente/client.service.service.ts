
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private db: AngularFireDatabase) { }

  insert(client: Client) {
    this.db.list('client').push(client)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(client: Client, key: string) {
    this.db.list('client').update(key, client)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('client')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.toJSON() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`client/${key}`).remove();
  }
}
