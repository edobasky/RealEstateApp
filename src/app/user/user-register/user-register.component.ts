import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/IUser';
import { UserService } from 'src/app/service/user.service';
import { AlertyfyService } from 'src/app/service/alertyfy.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user : User;
  registerationForm: FormGroup;
  userSubmitted : boolean;

  constructor(
    private userService : UserService,
    private alertify : AlertyfyService,
    private fb: FormBuilder
  ) {
    this.registerationForm = this.fb.group({
      userName : [null, Validators.required],
      email : [null,Validators.required],
      password : [null, [Validators.required,Validators.minLength(8)]],
      confirmPassword : [null, Validators.required],
      mobile : [null, [Validators.required, Validators.maxLength(10)]]
    },{Validators: this.passwordMatchValidator});
   }


  ngOnInit(): void {
    // this.registerationForm = new FormGroup({
    //   userName : new FormControl(null, Validators.required),
    //   email : new FormControl(null, [Validators.required,Validators.email]),
    //   password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchValidator);
   // this.createRegistrationForm();
  }

  // createRegistrationForm() {
  //   this.registrationForm = this.fb.group({
  //     userName : [null, Validators.required],
  //     email : [null,Validators.required],
  //     password : [null, [Validators.required,Validators.minLength(8)]],
  //     confirmPassword : [null, Validators.required],
  //     mobile : [null, [Validators.required, Validators.maxLength(10)]]
  //   },{Validators: this.passwordMatchValidator});
  // }

  passwordMatchValidator(fg: FormGroup) : Validators {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched : true}
  };


  onSubmit() : void {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if(this.registerationForm.valid) {
     // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());

      this.userSubmitted = false;
      this.alertify.success("congratulations,you have been registered")
    } else {
        this.alertify.error("sorry,please fill in complete information");
    }

    this.registerationForm.reset;
  }

  userData() : User {
      return this.user = {
        userName: this.userName.value,
        email : this.email.value,
        password : this.password.value,
        mobile : this.mobile.value
      }
  }

// get all form methods to cleanup
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }


}
