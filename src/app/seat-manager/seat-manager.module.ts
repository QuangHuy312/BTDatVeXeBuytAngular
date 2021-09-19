import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat/seat.component';
import { SeatListComponent } from './seatlist/seatlist.component';
import { EditseatComponent } from './editseat/editseat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeatComponent, SeatListComponent, EditseatComponent],
  imports: [CommonModule, FormsModule],
  exports: [SeatComponent, SeatListComponent, EditseatComponent],
})
export class SeatManagerModule {}
