import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  //courseName = 'Angular 21';
  courseName = signal('Angular 21');
  rollNo = signal(101);
   student = signal({
    name: 'John Doe',
    age: 25
   })

   cityList = signal<string[]>(['New York', 'Los Angeles', 'Chicago']);

   courseDuration = signal<String | null>("3 months"); // in months

  constructor() { 
    console.log('before '+this.courseName())
    setTimeout(()=>{
      this.courseName.set('Angular 21 - Updated');
      console.log('after '+this.courseName())
    },3000);
  }

  changeCourseName(){
    this.courseName.set('React JS');
  }
}
