import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {User} from '../user';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user : User={
    username:'',
    firstname:'',
    lastname:'',
    age:0,
    password:''
};
message:any ='Data Updated';

  constructor(private service:UserServiceService) { }


  ngOnInit(): void {
  }
  public updateDataUser(){
    let response=this.service.updateUser(this.user);
    response.subscribe( data=> {
      this.message=data;
    })
  }
}
