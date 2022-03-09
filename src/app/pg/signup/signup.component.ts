import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string='';
  phone:string="";
  password:string="";
  email:string="";
  address:string="";
  constructor(private authservices:AuthService) { }

  ngOnInit(): void {
  }
  Signup(){
    this.authservices.Signup({
      name: this.name,
      phone:this.phone,
      password:this.password,
      email:this.email,
      address:this.address
    })
  }

}
