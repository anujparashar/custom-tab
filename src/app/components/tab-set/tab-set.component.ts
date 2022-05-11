import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'nz-tabset',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss']
})
export class TabSetComponent {
@ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  constructor() { }

  selectTab(tab: TabComponent) {
    // deselect the selected(all) tabs and active only the selected one
    this.tabs.forEach((item) => item.active = false);
    tab.active = true;
  }
}
