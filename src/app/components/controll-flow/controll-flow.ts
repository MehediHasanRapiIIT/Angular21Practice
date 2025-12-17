import { Component, signal, Signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-controll-flow',
  imports: [FormsModule],
  templateUrl: './controll-flow.html',
  styleUrl: './controll-flow.css',
})
export class ControllFlow {

  isOfferCodeAvl: boolean = false;
  studentTotalMarks: number = 0;


  offerList: string[] = ['20% off for Paytm', '10% off for Google Pay', '5% off for Amazon Pay', '15% off for PhonePe'];


  isToggled = signal<boolean>(false);

  toggleDisplay() {
    this.isToggled.set(!this.isToggled());
  }
}
