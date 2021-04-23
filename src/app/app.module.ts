import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserItemComponent } from './Components/user-item/user-item.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserItemComponent, UserDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
