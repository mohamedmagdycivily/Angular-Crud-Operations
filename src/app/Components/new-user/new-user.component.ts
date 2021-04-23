import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: [],
})
export class NewUserComponent implements OnInit {
  id;
  name;
  email;
  phone;
  city;
  street;

  constructor(
    private myService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  Add() {
    let user = {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      city: this.city,
      street: this.street,
    };
    this.myService.AddNewUser(user).subscribe();
    // this.router.navigate(['users'], { relativeTo: this.route });
    this.router.navigate(['users']);
  }
}
