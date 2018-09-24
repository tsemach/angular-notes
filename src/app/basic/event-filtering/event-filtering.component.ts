import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent implements OnInit {

  data = ''
  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    console.log("Enter was press!");
    console.log("Enter was press!, value = ", $event.target.value);
    this.data = $event.target.value;
    //this.data = $event.value;
  }
}
