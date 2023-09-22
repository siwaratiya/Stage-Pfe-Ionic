import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from '../inscription.service';
import { User } from '../user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent  {
  toastr: any;
  inscObjet: User;
  submitted = false;
  signupForm: FormGroup
  isTypePassword: boolean=true;
  constructor(private _service: InscriptionService,private router: Router) {
    this.initform();
   }
   newUser(): void {
    this.submitted = false;
  }
  save() {
   
    this.inscObjet = new User();
    this.inscObjet.username = this.signupForm.value.username;
    this.inscObjet.emailId  = this.signupForm.value.email;
    this.inscObjet.password = this.signupForm.value.password;

    console.log(this.inscObjet);
    this._service.createUser(this.inscObjet).subscribe((data: any) => {
  
       if(!data) console.log("Registration failed!");
       else this.router.navigate(['/auth']);
      },
        (error: any) => console.log(error));
  }
  initform(){
    this.signupForm=  new FormGroup({
     username: new FormControl('',{validators: [Validators.required] }),
      email: new FormControl('',{validators: [Validators.required, Validators.email] }),
      password: new FormControl('',{validators: [Validators.required, Validators.minLength(8)] }),
    });
  }
  AddUser() {
    this.inscObjet = new User();
    let typeSave = this.signupForm.controls['typeSave'].value;
    this.inscObjet.username = this.signupForm.controls['username'].value;
    this.inscObjet.emailId = this.signupForm.controls['email'].value;
    this.inscObjet.password = this.signupForm.controls['password'].value;
    this._service.postuser(this.inscObjet).subscribe((data: User) =>{
      console.log("auth");

    }, (err) => {
      console.log("Erreur");
    }
    )
  }
  onSubmit() {
    if (!this. signupForm.valid) return;
    console.log(this. signupForm.value);
    this.submitted = true;
    this.save();
  }
   gotoList() {
    this.router.navigate(['/auth']);
  }
 onChange(){
    this.isTypePassword = !this.isTypePassword;
 }

}
