import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RentedComponent } from './rented/rented.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentListComponent } from './rent-list/rent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RentedComponent,
    DrivingListComponent,
    RentListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
