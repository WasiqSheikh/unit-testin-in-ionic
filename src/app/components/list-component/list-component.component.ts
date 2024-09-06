import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
  standalone: true,
  imports: []
})
export class ListComponentComponent  implements OnInit {

  //InputSignalExample with Bindtocomponentinput in angular

  id = input.required<string>();
  constructor() { }

  ngOnInit() {
    console.log('this.id = ', this.id());
  }

}
