import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {

  myClassName: string = ' text-dark p-3 rounded';

  isActive: boolean = true;
  productPrice: number = 500;
  divBackgroundColor: string = '';
}
