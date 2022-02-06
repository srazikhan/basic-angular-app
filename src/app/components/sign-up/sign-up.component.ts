import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFrom!: FormGroup;
  submitted: boolean = false;

  constructor(private fb:FormBuilder,private userService:UserService) {
    // this.signUpFrom = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    // })
    this.signUpFrom = this.fb.group({
      name:['',[Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.maxLength(20)]]
    })
  }

  ngOnInit(): void {
    this.userService.getSubject().subscribe((res:any)=>{
      console.log(res)
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpFrom.controls;
  }

  submitForm() {
    console.log("Form Submitted");
    this.submitted = true;
    if (this.signUpFrom.invalid) return

    //console.log(this.signUpFrom.value);
    console.log(this.signUpFrom.get('name')?.value);
  }

  updateForm(){
    console.log('cliked');
    this.signUpFrom.setValue({
      name:"HTML",
      email:"css@gmail.com ",
      password:"admin123",
    });
    //this.signUpFrom.get('name')?.setValue("HTML Course");

    // this.signUpFrom.patchValue({
    //   name:"HTML Course"
    // })
    //this.signUpFrom.get('name')?.patchValue("HTML Course");
  }
}
