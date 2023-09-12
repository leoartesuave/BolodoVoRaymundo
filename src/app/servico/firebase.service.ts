import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  dadosCollection:AngularFirestoreCollection;

  constructor(private angularFirestore:AngularFirestore) { 

    this.dadosCollection= angularFirestore.collection('receitas');
  }
  cadastro(dados: any){
    return this.dadosCollection.add(dados);
  }

  consulta(){
    return this.dadosCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
  }
}
