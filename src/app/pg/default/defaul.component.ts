import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-defaul',
  templateUrl: './defaul.component.html',
  styleUrls: ['./defaul.component.css']
})
export class DefaulComponent implements OnInit {

  /*constructor(private userservices:UserService) { }

  ngOnInit(): void {
  }
  UserExistt():Boolean{
   return  this.userservices.UserExist()
  }

  logout(){
    this.userservices.delete();
  }*/
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  isUserExist(): boolean {
    return this.userService.UserExist()
  }

  signOut() {
    this.userService.delete();
  }
}
