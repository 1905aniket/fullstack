import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user : User={
        username:'',
        firstname:'',
        lastname:'',
        age:0,
        password:''
  };
  message : any;
 

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {}

  public registerNow(){
    let response=this.service.doRegistration(this.user);
    response.subscribe( data=> {
      this.message=data;
    })
  }
}
