import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  dadosCollection: AngularFirestoreCollection;
  contasCollection: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) {

    this.dadosCollection = angularFirestore.collection('receitas');
    this.contasCollection = angularFirestore.collection('contas');
  }
  cadastro(dados: any) {
    return this.dadosCollection.add(dados);
  }
  cadastroLogin(dados:any){
    return this.contasCollection.add(dados);
  }


  consulta() {
    return this.dadosCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}
