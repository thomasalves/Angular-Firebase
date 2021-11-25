import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Produto } from '..';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }


  insert(produto: Produto) {
    this.db.list('produto').push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(produto: Produto, key: string) {
    this.db.list('produto').update(key, produto)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('produto')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.toJSON() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`produto/${key}`).remove();
  }

}
