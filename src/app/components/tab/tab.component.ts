import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() nzTitle = '';

  constructor() { }
// initial tab selection as false;
  active  = false;

}
