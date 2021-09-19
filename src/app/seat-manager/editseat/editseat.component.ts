import { Component, OnInit, ViewChild } from '@angular/core';
import { SeatListComponent } from '../seatlist/seatlist.component';

@Component({
  selector: 'app-editseat',
  templateUrl: './editseat.component.html',
  styleUrls: ['./editseat.component.scss'],
})
export class EditseatComponent implements OnInit {
  @ViewChild(SeatListComponent) seatListCom!: SeatListComponent;

  handleAddSeat(...value: any[]) {
    let seatAdded: seatList = {
      Id: parseInt(value[0]),
      Name: value[1],
      Price: parseInt(value[2]),
      Status: value[3],
    };
    this.seatListCom.AddSeat(seatAdded);
  }
  constructor() {}

  ngOnInit(): void {}
}

interface seatList {
  Id: number;
  Name: string;
  Price: number;
  Status: boolean;
}
