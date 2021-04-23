import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  users;
  constructor(private myService: UsersService, private router: Router) {}
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
  delete(id) {
    console.log(id);
    this.myService.DeleteById(id).subscribe((data) => {
      this.ngOnInit();
    });
    // location.reload();
    // this.router.navigate(['users']);
  }
}
