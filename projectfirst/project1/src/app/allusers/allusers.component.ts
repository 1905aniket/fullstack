import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
   users:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    let response=this.service.getUser();
    response.subscribe (data=>this.users=data);
  }
  public removeUser(username:any){
    let response=this.service.deleteUser(username);
    response.subscribe (data=>this.users=data);
  }
  
}
