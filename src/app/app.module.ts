import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeatManagerModule } from './seat-manager/seat-manager.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SeatManagerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
