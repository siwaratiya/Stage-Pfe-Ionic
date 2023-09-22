import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { InscriptionService } from '../inscription.service';
import { User } from '../user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent implements OnInit {
  user = new User;
  msg = '';
  form: FormGroup
  isTypePassword: boolean = true;
  constructor(private _service: InscriptionService, private _router: Router) {
    this.initform();
  }
  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }
  initform() {
    this.form = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
    });
    window.localStorage.setItem("user" , null);
  }
  onSubmit() {
    if (!this.form.valid) return;
    console.log(this.form.value);
  }
  loginUser() {
    console.log("loginUser");
    console.log(this.form.value);
    this.user.emailId = this.form.value.email;
    this.user.password = this.form.value.password;
    console.log(this.user);
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        console.log(data);
        window.localStorage.setItem("user" , JSON.stringify(data));
        
        if (!data) this.msg = "email ou password non valides";
        else  this._router.navigate(['/acceuil']);
      },
      error => {
        console.log("exception occured");
        this.msg = "email ou password non valides";
      }
    )
  }
  ngOnInit() {

  }
  doSomthing(event)
  {
   setTimeout(()=>{
    this.form = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
    });
    window.localStorage.setItem("user" , null);
   event.target.complete();
   },2000) 
  }

}