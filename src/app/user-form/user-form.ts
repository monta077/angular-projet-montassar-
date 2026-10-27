import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

//formBuilder
fb=inject(FormBuilder);
userForm=this.fb.group({
  username:['',[Validators.required,Validators.minLength(3)]],
  email:['',Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
  password:['',Validators.minLength(6)],
});

get username()
{
  return this.userForm.get('username');
}
  //FormGroup
//   userForm = new FormGroup({
// username: new FormControl('',[Validators.required, Validators.minLength(3)]),
// email: new FormControl(''),
// password: new FormControl(''),
//   });

  submitForm() {
    console.log(this.userForm.value);
  }

}
