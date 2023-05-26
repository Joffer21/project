import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'João';
  age: number = 30;
  job = 'Programador';

  constructor() {}

  ngOnInit(): void {}

}
