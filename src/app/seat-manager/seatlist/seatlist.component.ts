import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-seatlist',
  templateUrl: './seatlist.component.html',
  styleUrls: ['./seatlist.component.scss'],
})
export class SeatListComponent implements OnInit, DoCheck {
  seatList: seatList[] = [
    { Id: 1, Name: 'Ghế 1', Price: 100, Status: false },
    { Id: 2, Name: 'Ghế 2', Price: 100, Status: false },
    { Id: 3, Name: 'Ghế 3', Price: 100, Status: false },
    { Id: 4, Name: 'Ghế 4', Price: 100, Status: false },
    { Id: 5, Name: 'Ghế 5', Price: 100, Status: false },
    { Id: 6, Name: 'Ghế 6', Price: 100, Status: false },
    { Id: 7, Name: 'Ghế 7', Price: 100, Status: false },
    { Id: 8, Name: 'Ghế 8', Price: 100, Status: false },
    { Id: 9, Name: 'Ghế 9', Price: 100, Status: false },
    { Id: 10, Name: 'Ghế 10', Price: 100, Status: false },
    { Id: 11, Name: 'Ghế 11', Price: 100, Status: false },
    { Id: 12, Name: 'Ghế 12', Price: 100, Status: false },
    { Id: 13, Name: 'Ghế 13', Price: 100, Status: false },
    { Id: 14, Name: 'Ghế 14', Price: 100, Status: false },
    { Id: 15, Name: 'Ghế 15', Price: 100, Status: false },
    { Id: 16, Name: 'Ghế 16', Price: 100, Status: false },
    { Id: 17, Name: 'Ghế 17', Price: 100, Status: true },
    { Id: 18, Name: 'Ghế 18', Price: 100, Status: false },
    { Id: 19, Name: 'Ghế 19', Price: 100, Status: false },
    { Id: 20, Name: 'Ghế 20', Price: 100, Status: false },
    { Id: 21, Name: 'Ghế 21', Price: 100, Status: false },
    { Id: 22, Name: 'Ghế 22', Price: 100, Status: false },
    { Id: 23, Name: 'Ghế 23', Price: 100, Status: false },
    { Id: 24, Name: 'Ghế 24', Price: 100, Status: true },
    { Id: 25, Name: 'Ghế 25', Price: 100, Status: false },
    { Id: 26, Name: 'Ghế 26', Price: 100, Status: false },
    { Id: 27, Name: 'Ghế 27', Price: 100, Status: false },
    { Id: 28, Name: 'Ghế 28', Price: 100, Status: false },
    { Id: 29, Name: 'Ghế 29', Price: 100, Status: false },
    { Id: 30, Name: 'Ghế 30', Price: 100, Status: false },
    { Id: 31, Name: 'Ghế 31', Price: 100, Status: false },
    { Id: 32, Name: 'Ghế 32', Price: 100, Status: false },
    { Id: 33, Name: 'Ghế 33', Price: 100, Status: false },
    { Id: 34, Name: 'Ghế 34', Price: 100, Status: false },
    { Id: 35, Name: 'Ghế 35', Price: 100, Status: true },
  ];
  listBooked: number = 0;
  listRemaining: number = this.seatList.length;
  listSeatBooking: seatList[] = [];
  totalPrice: number = 0;
  constructor() {}

  checkStatusParent(status: boolean, seatBooking: seatList) {
    if (status) {
      this.listBooked++;
      this.listRemaining--;
      this.listSeatBooking.push(seatBooking);
    } else {
      this.listBooked--;
      this.listRemaining++;
      for (let idx in this.listSeatBooking) {
        if (this.listSeatBooking[idx].Id === seatBooking.Id) {
          this.listSeatBooking.splice(parseInt(idx), 1);
        }
      }
    }
  }

  AddSeat(seatAdded: seatList) {
    this.seatList.push(seatAdded);
  }

  ngOnInit() {
    for (let seat of this.seatList) {
      if (seat.Status) {
        this.listRemaining--;
      }
    }
  }

  ngDoCheck() {
    const total = this.listSeatBooking.reduce((total, item) => {
      return (total += item.Price);
    }, 0);
    this.totalPrice = total;
  }
}
interface seatList {
  Id: number;
  Name: string;
  Price: number;
  Status: boolean;
}
