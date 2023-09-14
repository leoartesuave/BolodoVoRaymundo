import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../servico/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {

  form!:FormGroup;
  
  constructor(private formBuild:FormBuilder, 
    private authencation: AuthService,
    private router: Router) { }

  formulario(){
    this.authencation.loginUser(this.form.value);
  }

}
