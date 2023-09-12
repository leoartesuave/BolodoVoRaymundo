import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servico/FirebaseService';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  form!:FormGroup;
  constructor(private formBuild:FormBuilder,
    private firebase:FirebaseService) { }

  ngOnInit() {
    this.validaForm()
  }

 validaForm(){
    this.form = this.formBuild.group({
      email: ['',[Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]]
      
    })
}

  login(){
    this.firebase.cadastroLogin(this.form.value);
  }

}
