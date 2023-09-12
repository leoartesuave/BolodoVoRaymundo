import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servico/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  titulo = "Bolo vô Thyago";
  receitas: any[]=[];

  constructor(private firebase:FirebaseService){}

  ngOnInit(): void {
    this.firebase.consulta().subscribe(result => this.receitas = result);
  }
 
}
