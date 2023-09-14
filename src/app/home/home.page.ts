import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servico/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private authencation: AuthService,
    private router: Router) {}
 
    ngOnInit(): void {
      this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  formulario(){
    
        this.authencation.loginUser(this.form.value);
 

  }
}
