import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servico/FirebaseService';

@Component({
  selector: 'app-add-bolo',
  templateUrl: './add-bolo.page.html',
  styleUrls: ['./add-bolo.page.scss'],
})
export class AddBoloPage implements OnInit {

  nameButton="Enviar"
  form!:FormGroup;


  constructor(private formBuild:FormBuilder,
    private firebase:FirebaseService
    ) { }

  ngOnInit() {
    this.validaForm()
  }

  validaForm(){
    this.form = this.formBuild.group({
      img: ['',[Validators.required]],
      titulo:['', [Validators.required]],
      ing: ['', [Validators.required]],
      prep: ['', [Validators.required]]
    });
  }

  enviar(){
    this.firebase.cadastro(this.form.value);
  }

}
