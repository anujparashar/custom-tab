import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { components } from './components';
import { TabSetComponent } from './components/tab-set/tab-set.component';
import { TabComponent } from './components/tab/tab.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
