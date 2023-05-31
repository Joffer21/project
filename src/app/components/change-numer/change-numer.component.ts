import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-change-numer',
  templateUrl: './change-numer.component.html',
  styleUrls: ['./change-numer.component.css']
})
export class ChangeNumerComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
  
  handleClick() {
    this.changeNumber.emit();
  }

}
