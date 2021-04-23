import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  constructor(private myService: UsersService) {}
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  users;
}
