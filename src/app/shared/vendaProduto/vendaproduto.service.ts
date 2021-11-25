import { vendaProduto } from './vendaProduto.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendaprodutoService {

  constructor(private db: AngularFireDatabase ) { }

  insert(venda: vendaProduto) {
    this.db.list('Venda').push(venda)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getAll() {
    return this.db.list('Venda')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.toJSON() }));
        })
      );
  }


}
