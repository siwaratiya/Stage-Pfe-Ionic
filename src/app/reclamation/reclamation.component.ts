import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Dep } from '../dep';
import { DepService } from '../dep.service';
import { Reclamation } from '../Reclamation';
import { ReclamationsService } from '../reclamations.service';
import { User } from '../user';
import swal from 'sweetalert';



@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss'],
})
export class ReclamationComponent {
  toastr: any;
  reclamationObjet: Reclamation;
  recForm: FormGroup
  submitted = false;
  lstservice: Dep[] = [];
  user: User;

  constructor(private reclamationService: ReclamationsService, private DS: DepService,
    private router: Router) {
    this.initform();

  }

  newReclamation(): void {
    this.submitted = false;

  }
  AjoutReclamation() {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log("RecUser");
    console.log(user);
    this.reclamationObjet = new Reclamation();
    this.reclamationObjet.type_rec = this.recForm.value.Typerec;
    this.reclamationObjet.description_rec = this.recForm.value.descrec;
    this.reclamationObjet.id = user.client.id;
    this.reclamationObjet.services = new Array<Dep>();
    this.recForm.value.chk_svc.forEach(svc => {
      console.log(svc);
      this.lstservice.forEach((dep: Dep) => {
        if (dep.id_service == svc) {
          console.log("Pushing " + dep.nom_service);
          console.log(this.reclamationObjet.services);
          this.reclamationObjet.services.push(dep);
        }
      });
    });
    console.log("Ajout :" + this.reclamationObjet);
  }
  save() {
    console.log(this.reclamationObjet); 
    this.reclamationService.createReclamation(this.reclamationObjet).subscribe((data: any) => {
      console.log("Reclamation ajoutée!" + data.id_rec);
      this.reclamationObjet = new Reclamation();
      this.gotoList();
    }, (error: any) => console.log(error));

  }
  initform() {
    this.DS.getServiceList().subscribe((val: Dep[]) => {
      this.lstservice = val;
      console.log(val)
    });
    this.recForm = new FormGroup({
      Typerec: new FormControl('', { validators: [Validators.required] }),
      descrec: new FormControl('', { validators: [Validators.required] }),
      chk_svc: new FormArray([]),
    });
  }

  onSubmit() {
    if (!this.recForm.valid) return;
    console.log(this.recForm.value);
    swal("Reclamation ajoutée avec succées", "success");
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/listrec']);
  }
  onCheckChange(event) {
    const formArray: FormArray = this.recForm.get('chk_svc') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}