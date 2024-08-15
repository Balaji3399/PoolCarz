import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.css'
})
export class BookRideComponent {
    rides = [
      {
        id : 1 ,
        offerId : '001' ,
        name : 'vanrose Junction' ,
        car : 'BMW' ,
        seatsLeft : 5 ,
        pickUp : 'vanrose Junction' ,
        destination : 'office'
      },
      {
        id : 2 ,
        offerId : '002' ,
        name : 'vanrose Junction' ,
        car : 'BMW' ,
        seatsLeft : 5 ,
        pickUp : 'PTP' ,
        destination : 'office'
      },
      {
        id : 3 ,
        offerId : '003' ,
        name : 'vanrose Junction' ,
        car : 'BMW' ,
        seatsLeft : 5 ,
        pickUp : 'Office' ,
        destination : 'East-Fort'
      },
      {
        id : 1 ,
        offerId : '001' ,
        name : 'vanrose Junction' ,
        car : 'BMW' ,
        seatsLeft : 5 ,
        pickUp : 'Office' ,
        destination : 'Central Mall'
      }
    ]
    showrides = false ;
    toggle(){
      this.showrides = !this.showrides ;
    }
}
