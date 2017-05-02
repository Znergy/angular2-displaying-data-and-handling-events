import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MessagesComponent, AutoGrowDirective, StarComponent],
  providers: [ MessagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
