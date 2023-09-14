import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
 
  contaCollection: AngularFirestoreCollection
  
  constructor(private angularFire: AngularFirestore) {
    this.contaCollection = angularFire.collection('contas');
   }
   consulta(){
    return this.contaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
  }

  //Busca somente um produto
  consultaOne(id: string){
    return this.contaCollection.doc(id).valueChanges();
  }

  cadastro(dados: any){
    return this.contaCollection.add(dados)
  }

  deletar(id: string){
    return this.contaCollection.doc(id).delete()
  }

  /* editar(id: any, dados: contas){
    return this.contaCollection.doc(id).update(dados)
  } */

}
