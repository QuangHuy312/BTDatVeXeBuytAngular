import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  status: boolean = false;
  @Output() checkStatus = new EventEmitter();
  @Input() ItemSeat!: Seat;

  handleClickSeat() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.checkStatus.emit(this.status);
  }
  constructor() {}

  ngOnInit(): void {}
}

interface Seat {
  Id: number;
  Name: string;
  Price: number;
  Status: boolean;
}
